import React, { createContext, useReducer } from 'react'
import { Dialog } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import { FormErrors, OfferType } from '@/types'
import Center from '@/components/shared/Center'
import CloseButton from '@/components/shared/CloseButton'
import devlog from '@/debug/devlog'
import post from '@/helpers/post'
import { initialSubmit, reducer } from '@/helpers/submitReducer'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'

type AddOfferContextType = {
	register: UseFormRegister<FieldValues>
	errors: FormErrors
	loading: boolean
}

type FormData = {
	tech: OfferType['tech']
	title: OfferType['title']
	description: OfferType['description']
	technology: string[]
	techLvl?: number[]
	empType: OfferType['empType']
	expLvl: OfferType['expLvl']
	salaryFrom: OfferType['salaryFrom']
	salaryTo: OfferType['salaryTo']
}

export const AddOfferContext = createContext<AddOfferContextType>(
	{} as AddOfferContextType
)

const AddOfferContextProvider = ({
	children,
	isOpen,
	close,
}: {
	children: React.ReactNode
	isOpen: boolean
	close: VoidFunction
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm()

	const [submit, dispatch] = useReducer(reducer, initialSubmit)
	const { failure: error, success, loading } = submit
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onSubmit = handleSubmit(async (data: FormData) => {
		dispatch({ type: 'LOADING', payload: true })
		devlog('submitted new offer: ', data)
		const technology: { tech: string; techLvl: number }[] = []
		for (let i = 0; i < data.technology.length; i++) {
			technology.push({
				tech: data.technology[i],
				techLvl: data.techLvl![i],
			})
		}

		const formData = {
			...data,
			dateAdded: moment().format('x'),
			technology: JSON.stringify(technology),
		}
		delete formData.techLvl

		await post('/api/offers', formData)

		dispatch({ type: 'LOADING', payload: false })
		dispatch({ type: 'SUCCESS', payload: true })
	})
	const closeModal = () => {
		dispatch({ type: 'SUCCESS', payload: false })
		dispatch({ type: 'FAILURE', payload: false })
		close()
	}

	return (
		<AddOfferContext.Provider
			value={{
				register,
				errors,
				loading,
			}}>
			{(success || error) && (
				<Dialog
					maxWidth='sm'
					open={isOpen}
					onClose={closeModal}
					fullWidth
					fullScreen={fullScreen}>
					<Center height='50vh'>
						<CloseButton
							handleClick={closeModal}
							absolute={{ right: '5px', top: '5px' }}
						/>
						{success && 'Offer was added successfully!'}
						{error && "Couldn't add offer. Please try again"}
					</Center>
				</Dialog>
			)}

			{!success && !error && (
				<Dialog
					maxWidth='md'
					open={isOpen}
					onClose={close}
					fullWidth
					fullScreen={fullScreen}>
					<form onSubmit={onSubmit}>{children}</form>
				</Dialog>
			)}
		</AddOfferContext.Provider>
	)
}
export default AddOfferContextProvider

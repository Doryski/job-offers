import React, { createContext, useReducer } from 'react'
import { Dialog } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import { FormErrors, OfferType } from '@/types'
import Center from '@/shared-components/Center/styled'
import CloseButton from '@/shared-components/CloseButton'
import post from 'utils/post'
import { initialSubmit, reducer } from 'utils/submitReducer'
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

type AddOfferContextProviderProps = {
	children: React.ReactNode
	isOpen: boolean
	close: VoidFunction
}

const AddOfferContext = createContext<AddOfferContextType>(
	{} as AddOfferContextType
)

const AddOfferContextProvider = ({
	children,
	isOpen,
	close,
}: AddOfferContextProviderProps) => {
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
export { AddOfferContext }
export default AddOfferContextProvider

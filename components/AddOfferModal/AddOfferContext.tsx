import React, { useState, createContext } from 'react'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import { OfferType } from '../../types'
import Center from '../shared/Center'
import CloseButton from '../shared/CloseButton'
import devlog from '../../debug/devlog'
import post from '../../helpers/post'
type AddOfferContextType = {
	register: Function
	errors: Record<string, any>
	loading: boolean
}

type FormData = {
	tech: OfferType['tech']
	title: OfferType['title']
	description: OfferType['description']
	technology: string[]
	techLvl: number[]
	empType: OfferType['empType']
	expLvl: OfferType['expLvl']
	salaryFrom: OfferType['salaryFrom']
	salaryTo: OfferType['salaryTo']
}
export type AddOfferData = Partial<OfferType & { techLvl?: number[] }>

const initialContext = {
	register: () => {},
	errors: {},
	loading: false,
}

export const AddOfferContext = createContext<AddOfferContextType>(
	initialContext
)

const AddOfferContextProvider = ({
	children,
	isDialogOpen,
	close,
}: {
	children: React.ReactNode
	isDialogOpen: boolean
	close: VoidFunction
}) => {
	const { handleSubmit, register, errors } = useForm()

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const fullScreen = useMediaQuery('(max-width:800px)')

	const onSubmit = handleSubmit(async (data: FormData) => {
		setLoading(true)
		devlog('submitted new offer: ', data)
		let technology: { tech: string; techLvl: number }[] = []
		for (let i = 0; i < data.technology.length; i++) {
			technology.push({
				tech: data.technology[i],
				techLvl: data.techLvl[i],
			})
		}

		let formData: AddOfferData = {
			...data,
			dateAdded: moment().format('x'),
			technology: JSON.stringify(technology),
		}
		delete formData.techLvl

		await post('/api/offers', formData)

		setLoading(false)
		setSuccess(true)
		return
	})
	const closeModal = () => {
		setSuccess(false)
		setError(false)
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
					open={isDialogOpen}
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
					open={isDialogOpen}
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

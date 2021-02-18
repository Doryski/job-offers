import React, { useState, createContext } from 'react'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { DATE_FORMAT } from '../../helpers/utils'
import moment from 'moment'
import OfferType from '../../types/OfferType'
import Center from '../shared/Center'

type AddOfferContextType = {
	register: Function
	errors: Record<string, any>
	loading: boolean
}

type FormData = {
	id: OfferType['uuid']
	tech: OfferType['tech']
	title: OfferType['title']
	technology: string[]
	techLvl: number[]
	empType: string
	expLvl: string
	salaryFrom: number
	salaryTo: number
}

const initialContext = {
	register: () => { },
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

	const onSubmit = handleSubmit((data: FormData) => {
		let technology = []
		for (let i = 0; i < data.technology.length; i++) {
			technology.push({
				tech: data.technology[i],
				techLvl: +data.techLvl[i],
			})
		}

		let formData: OfferType & { techLvl?: number[] } = {
			...data,
			dateAdded: moment().format(DATE_FORMAT),
			image: 'filename',
			employerId: employer.uuid,
			// description,
			technology,
		}
		delete formData.techLvl
		// // change to mysql database
		// database
		//     .ref('offers')
		//     .push(formData)
		//     .then(
		//         () => {
		//             setSuccess(true)
		//             setLoading(false)
		//         },
		//         error => {
		//             setError(true)
		//             console.log('Error fetching data', error)
		//         }
		//     )
	})

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
					onClose={() => {
						setSuccess(false)
						close()
					}}
					fullWidth
					fullScreen={fullScreen}>
					<Center height='50vh'>
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

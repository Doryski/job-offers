import React, { useState, createContext } from 'react'
import { Dialog } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import { OfferType } from '../../types'
import Center from '../shared/Center'
import CloseButton from '../shared/CloseButton'
import devlog from '../../helpers/devlog'
type AddOfferContextType = {
	register: Function
	errors: Record<string, any>
	loading: boolean
}

type FormData = {
	id: OfferType['uuid']
	tech: OfferType['tech']
	title: OfferType['title']
	description: OfferType['description']
	technology: string[]
	techLvl: number[]
	empType: string
	expLvl: string
	salaryFrom: number
	salaryTo: number
}

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
	// test object for employer
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

		let formData: Partial<OfferType & { techLvl?: number[] }> = {
			...data,
			dateAdded: moment().format('x'),
			technology: JSON.stringify(technology),
		}
		delete formData.techLvl
		// // change to mysql database
		async function postOffer(url: string, data: typeof formData) {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			return res.json()
		}
		await postOffer('/api/offers', formData)

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

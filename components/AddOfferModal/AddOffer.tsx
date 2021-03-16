import CustomButton from '@/components/shared/CustomButton'
import useDialogHandler from '@/hooks/useDialogHandler'
import AddOfferContextProvider from './AddOfferContext'
import dynamic from 'next/dynamic'
const AddOfferModal = dynamic(() => import('@/components/AddOfferModal'))

const AddOffer = () => {
	const { open, isDialogOpen, close } = useDialogHandler(false)

	return (
		<>
			<CustomButton
				fWeight={400}
				handleClick={open}
				margin='0 0.875em 0 0.375em'
				padding='0.625em 1.125em'>
				Post a Job
			</CustomButton>
			{isDialogOpen && (
				<AddOfferContextProvider isDialogOpen={isDialogOpen} close={close}>
					<AddOfferModal close={close} />
				</AddOfferContextProvider>
			)}
		</>
	)
}

export default AddOffer

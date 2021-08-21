import dynamic from 'next/dynamic'
import CustomButton from '@/shared-components/CustomButton'
import useDialogHandler from '@/hooks/useDialogHandler'
import AddOfferContextProvider from '../AddOfferContext'

const AddOfferModal = dynamic(() => import('@/components/AddOfferModal'))

const AddOffer = () => {
	const { open, isOpen, close } = useDialogHandler(false)

	return (
		<>
			<CustomButton
				fWeight={400}
				handleClick={open}
				margin='0 0.875em 0 0.375em'
				padding='0.625em 1.125em'>
				Post a Job
			</CustomButton>
			{isOpen && (
				<AddOfferContextProvider isOpen={isOpen} close={close}>
					<AddOfferModal close={close} />
				</AddOfferContextProvider>
			)}
		</>
	)
}

export default AddOffer

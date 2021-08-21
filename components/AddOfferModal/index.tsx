import { useContext } from 'react'
import DialogHeader from '@/shared-components/DialogHeader'
import CustomButton from '@/shared-components/CustomButton'
import inputProps from 'utils/inputProps'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import { Container, StyledCircularProgress, Wrapper } from './styled'
import { AddOfferContext } from './AddOfferContext'
import InputComponent from './CustomInput'

const AddOfferModal = ({ close }: { close: VoidFunction }) => {
	const { register, errors, loading } = useContext(AddOfferContext)
	const formProps = { register, errors }

	return (
		<Container>
			<DialogHeader close={close}>Add offer</DialogHeader>
			<InfoSection />
			<DialogHeader>Technology</DialogHeader>
			<TechnologySection />
			<InputComponent
				type='text'
				{...inputProps('Description')}
				{...formProps}
			/>
			<Wrapper>
				<CustomButton type='submit' padding='0.5em 1.125em' primary>
					{loading ? (
						<StyledCircularProgress size='10px' color='secondary' />
					) : (
						'Add offer'
					)}
				</CustomButton>
			</Wrapper>
		</Container>
	)
}

export default AddOfferModal

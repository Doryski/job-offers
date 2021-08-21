import { useContext } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogHeader from '@/shared-components/DialogHeader'
import styled from 'styled-components'
import CustomButton from '@/shared-components/CustomButton'
import inputProps from 'utils/inputProps'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import { Wrapper } from './StyledForm'
import { AddOfferContext } from './AddOfferContext'
import InputComponent from './CustomInput'

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	padding-bottom: 0.625em;
`
export const StyledCircularProgress = styled(CircularProgress)`
	margin: 0 1.5625em;
`
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

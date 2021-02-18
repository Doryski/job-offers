import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import TechList from './TechList'
import Dialog from '@material-ui/core/Dialog'
import useDeviceDetect from '../../helpers/useDeviceDetect'
import { useRouter } from 'next/router'

type MobileViewProps = {
	isDialogOpen: boolean
	open: VoidFunction
	close: VoidFunction
}

const MobileView = ({ isDialogOpen, open, close }: MobileViewProps) => {
	const { query } = useRouter()
	const isMobile = useDeviceDetect(1025)

	return (
		<>
			<ButtonWrapper>
				<CustomButton
					padding={isMobile ? '.35em .5em .35em .8em' : undefined}
					handleClick={open}
					active={!!query.tech}
					icon
					isOpen={isDialogOpen}>
					Tech
				</CustomButton>
			</ButtonWrapper>
			{isDialogOpen && (
				<Dialog maxWidth='md' open={isDialogOpen} onClose={close} fullWidth>
					<Container>
						<TechList close={close} />
					</Container>
				</Dialog>
			)}
		</>
	)
}
export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, auto);
	padding: 1em 0;
`
export const ButtonWrapper = styled.div`
	margin: 0 0.3125em;

	@media (max-width: 1025px) {
		margin: -0.6em 0.3125em 0 0.3125em;
	}
`

export default MobileView

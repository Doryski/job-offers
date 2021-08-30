import Drawer from '@material-ui/core/Drawer'
import useBooleanState from '@/hooks/useBooleanState'
import CustomButton from '@/shared-components/CustomButton'
import Navigation from '../Navigation'
import { Container, Burger } from './styled'

const DrawerComponent = () => {
	const [isOpen, open, close] = useBooleanState(false)

	return (
		<>
			<CustomButton
				bordered={false}
				round
				height='35px'
				minWidth='35px'
				padding='0'
				icon={{
					icon: <Burger onClick={open} />,
					color: 'text',
					display: 'flex',
					margin: 'auto',
				}}
			/>
			<Drawer anchor='right' open={isOpen} onClose={close}>
				<Container>
					<Navigation handleClick={close} />
				</Container>
			</Drawer>
		</>
	)
}
export default DrawerComponent

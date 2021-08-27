import Drawer from '@material-ui/core/Drawer'
import SideBar from '../../SideBar'

type HandleCloseFunction = (
	event: {},
	reason: 'backdropClick' | 'escapeKeyDown'
) => void

type DrawerComponentProps = {
	handleClose: HandleCloseFunction
	isOpen: boolean
}

const DrawerComponent = ({ handleClose, isOpen }: DrawerComponentProps) => (
	<Drawer anchor='right' open={isOpen} onClose={handleClose}>
		<SideBar />
	</Drawer>
)
export default DrawerComponent

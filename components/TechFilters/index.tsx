import MobileView from './MobileView'
import DesktopView from './DesktopView'
import useDialogHandler from '../../hooks/useDialogHandler'
import useDeviceDetect from '../../hooks/useDeviceDetect'

const TechFilters = () => {
	// const { close, toggle, open, isDialogOpen } = useDialogHandler(false)
	const isMobile = useDeviceDetect(1025)

	return isMobile ? (
		<MobileView
		// isDialogOpen={isDialogOpen} close={close} open={open}
		/>
	) : (
		<DesktopView
		// close={close}
		// toggle={toggle}
		// isListOpen={isDialogOpen}
		/>
	)
}

export default TechFilters

import MobileView from './MobileView'
import DesktopView from './DesktopView'
import useDialogHandler from '../../helpers/useDialogHandler'
import useDeviceDetect from '../../helpers/useDeviceDetect'

const TechFilters = () => {
	const { close, toggle, open, isDialogOpen } = useDialogHandler(false)
	const isMobile = useDeviceDetect(1025)

	return isMobile ? (
		<MobileView isDialogOpen={isDialogOpen} close={close} open={open} />
	) : (
		<DesktopView
			close={close}
			toggle={toggle}
			isListOpen={isDialogOpen}
			cutTechArray={14}
		/>
	)
}

export default TechFilters

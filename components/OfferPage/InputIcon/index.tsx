import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { StyledInputAdornment } from './styled'

type InputIconProps = { Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> }

const InputIcon = ({ Icon }: InputIconProps) => (
	<StyledInputAdornment position='start'>
		<Icon />
	</StyledInputAdornment>
)

export default InputIcon

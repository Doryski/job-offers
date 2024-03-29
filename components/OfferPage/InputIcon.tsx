import { InputAdornment, SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import styled from 'styled-components'

type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>

const StyledInputAdornment = styled(InputAdornment)`
	color: ${({ theme }) => theme.colors.span};
`

const InputIcon = ({ Icon }: { Icon: IconType }) => (
	<StyledInputAdornment position='start'>
		<Icon />
	</StyledInputAdornment>
)

export default InputIcon

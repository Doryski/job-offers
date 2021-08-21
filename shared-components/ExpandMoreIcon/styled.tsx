import { ICON_SIZE } from '@/utils/vars'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import styled from 'styled-components'

type ExpandMoreIconProps = {
	active?: boolean
	primary?: boolean
	isOpen?: boolean
}
const ExpandMoreIcon = styled(
	({ active, primary, isOpen, ...props }: ExpandMoreIconProps) =>
		isOpen ? (
			<ExpandLess {...props} fontSize={ICON_SIZE} />
		) : (
			<ExpandMore {...props} fontSize={ICON_SIZE} />
		)
)`
	color: ${({ theme, active, primary }) =>
		(active && theme.colors.primary) ||
		(primary ? theme.colors.white : theme.colors.text)};
`

export { ExpandMoreIcon }

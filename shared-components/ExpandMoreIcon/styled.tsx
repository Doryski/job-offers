import { ICON_SIZE } from '@/utils/vars'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import styled from 'styled-components'

const ExpandMoreIcon = styled(
	({
		active,
		primary,
		isOpen,
		...props
	}: {
		active?: boolean
		primary?: boolean
		isOpen?: boolean
	}) =>
		isOpen ? (
			<ExpandLess {...props} fontSize={ICON_SIZE} />
		) : (
			<ExpandMore {...props} fontSize={ICON_SIZE} />
		)
)`
	color: ${({ theme, active, primary }) =>
		active
			? theme.colors.primary
			: primary
			? theme.colors.white
			: theme.colors.text};
`

export { ExpandMoreIcon }

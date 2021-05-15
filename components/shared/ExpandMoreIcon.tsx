import { ExpandLess, ExpandMore } from '@material-ui/icons'
import styled from 'styled-components'
import { ICON_SIZE } from '@/helpers/utils'

export const StyledExpandMoreIcon = styled(
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

const ExpandMoreIcon = ({
	isOpen,
	primary,
	active,
}: {
	isOpen: boolean
	primary: boolean
	active: boolean
}) => <StyledExpandMoreIcon primary={primary} active={active} isOpen={isOpen} />

export default ExpandMoreIcon

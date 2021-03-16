import { ExpandLess, ExpandMore } from '@material-ui/icons'
import styled from 'styled-components'
import { ICON_SIZE } from '@/helpers/utils'

const ExpandMoreIcon = ({
	isOpen,
	pink,
	active,
}: {
	isOpen: boolean
	pink: boolean
	active: boolean
}) => {
	return <StyledExpandMoreIcon pink={pink} active={active} isOpen={isOpen} />
}
export const StyledExpandMoreIcon = styled(
	({
		active,
		pink,
		isOpen,
		...props
	}: {
		active?: boolean
		pink?: boolean
		isOpen?: boolean
	}) =>
		isOpen ? (
			<ExpandLess {...props} fontSize={ICON_SIZE} />
		) : (
			<ExpandMore {...props} fontSize={ICON_SIZE} />
		)
)`
	color: ${({ theme, active, pink }) =>
		active ? theme.colors.pink : pink ? theme.colors.white : theme.colors.text};
`
export default ExpandMoreIcon

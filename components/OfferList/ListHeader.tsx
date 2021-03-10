import { ExpandLess } from '@material-ui/icons'
import styled from 'styled-components'
import { textColors } from '../../theme'
import SortDropdown from '../shared/SortDropdown'
import Typography from '../shared/Typography'
import { ICON_SIZE } from '../shared/InfoLabel'

const ListHeader = () => (
	<FiltersWrapper>
		<SortFiltersWrapper>
			<SortDropdown />
			<FiltersButtonWrapper>
				<Typography color={textColors.span}>Filters</Typography>
				<ShowFiltersIcon />
			</FiltersButtonWrapper>
		</SortFiltersWrapper>
	</FiltersWrapper>
)

export const FiltersWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	margin: 0 0.5em 0.5em 0;
`
export const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	padding: 0.1875em;
`

export const ShowFiltersIcon = styled(({ ...props }) => (
	<ExpandLess {...props} fontSize={ICON_SIZE} />
))`
	color: ${({ theme }) => theme.colors.text};
	transform: rotate(90deg);
`

export const FiltersButtonWrapper = styled.div`
	display: flex;
`
export default ListHeader

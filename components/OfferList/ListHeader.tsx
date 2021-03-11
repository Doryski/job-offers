import { ExpandLess } from '@material-ui/icons'
import styled from 'styled-components'
import { textColors } from '../../theme'
import SortDropdown from '../shared/SortDropdown'
import Typography from '../shared/Typography'
import { ICON_SIZE } from '../shared/InfoLabel'
import InputFilter from '../shared/InputFilter'

const ListHeader = ({
	showFilters,
	setShowFilters,
}: {
	showFilters: boolean
	setShowFilters
}) => (
	<OptionsHeader>
		<SortFiltersWrapper>
			<InputFilter />
			<Wrapper>
				<SortDropdown />
				<FiltersWrapper onClick={() => setShowFilters((prev) => !prev)}>
					<Typography color={textColors.span}>Filters</Typography>
					<ShowFiltersIcon fontSize={ICON_SIZE} isOpen={showFilters} />
				</FiltersWrapper>
			</Wrapper>
		</SortFiltersWrapper>
	</OptionsHeader>
)

export const OptionsHeader = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	margin: 0 0.5em 0.5em 0;
	height: 42px;
	border-bottom-right-radius: 5px;
`
export const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	padding: 0.1875em;
`

export const ShowFiltersIcon = styled(({ isOpen, fontSize, ...props }) => (
	<ExpandLess {...props} fontSize={fontSize} isOpen={isOpen} />
))`
	color: ${({ theme }) => theme.colors.text};
	transform: rotate(${({ isOpen }) => (isOpen ? '-90deg' : '90deg')});
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

export const FiltersWrapper = styled.div`
	display: flex;
	margin-left: 0.75em;
	cursor: pointer;
	padding: 0.5em 0;
`

export default ListHeader

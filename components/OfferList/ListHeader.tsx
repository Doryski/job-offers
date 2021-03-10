import { ExpandLess } from '@material-ui/icons'
import styled from 'styled-components'
import { textColors } from '../../theme'
import SortDropdown from '../shared/SortDropdown'
import Typography from '../shared/Typography'
import { ICON_SIZE } from '../shared/InfoLabel'
import InputFilter from '../shared/InputFilter'

const ListHeader = () => (
	<OptionsHeader>
		<SortFiltersWrapper>
			<InputFilter />
			<Wrapper>
				<SortDropdown />
				<FiltersWrapper>
					<Typography color={textColors.span}>Filters</Typography>
					<ShowFiltersIcon />
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

export const ShowFiltersIcon = styled(({ ...props }) => (
	<ExpandLess {...props} fontSize={ICON_SIZE} />
))`
	color: ${({ theme }) => theme.colors.text};
	transform: rotate(90deg);
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

export const FiltersWrapper = styled.div`
	display: flex;
	margin-left: 0.75em;
	cursor: pointer;
`

export default ListHeader

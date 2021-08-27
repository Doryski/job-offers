import { ExpandLess } from '@material-ui/icons'
import styled from 'styled-components'

const OptionsHeader = styled.div`
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	margin: 0 0.5em 0.5em 0;
	height: 42px;
	border-bottom-right-radius: 5px;
`
const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	padding: 0.1875em;
`

const ShowFiltersIcon = styled(({ isOpen, fontSize, ...props }) => (
	<ExpandLess {...props} fontSize={fontSize} />
))<{ isOpen: boolean }>`
	color: ${({ theme }) => theme.colors.text};
	transform: rotate(${({ isOpen }) => (isOpen ? '-90deg' : '90deg')});
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const FiltersWrapper = styled.div`
	display: flex;
	cursor: pointer;
	padding: 0.25em 0.75em 0.25em 0.75em;
	border-left: 1px solid ${({ theme }) => theme.colors.divider};
	&:last-of-type {
		margin-top: 0.1em;
	}
`

export {
	FiltersWrapper,
	Wrapper,
	OptionsHeader,
	SortFiltersWrapper,
	ShowFiltersIcon,
}

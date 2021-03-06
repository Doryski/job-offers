import styled from 'styled-components'
import Label from '../shared/Label'
import SortDropdown from '../shared/SortDropdown'

const ListHeader = () => (
	<FiltersWrapper>
		<SortFiltersWrapper>
			<SortDropdown />
		</SortFiltersWrapper>
	</FiltersWrapper>
)

export const FiltersWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	margin: 0 0.5em 0.5em 0;
`
export const SalaryFiltersWrapper = styled.div`
	padding-left: 1.5625em;
	display: flex;
	position: relative;
	&::before,
	&::after {
		width: 20px;
		height: 20px;
		content: '';
		position: absolute;
		bottom: 0px;
	}
	&::before {
		left: 5px;
		background: radial-gradient(
			circle at left top,
			transparent 70%,
			${({ theme }) => theme.colors.buttonBackgroundHover} 69%
		);
	}
	&::after {
		right: -20px;
		background: radial-gradient(
			circle at right top,
			transparent 70%,
			${({ theme }) => theme.colors.buttonBackgroundHover} 69%
		);
	}
`
export const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	padding: 0.1875em;
`
export default ListHeader

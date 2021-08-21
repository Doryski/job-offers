import styled from 'styled-components'

const StyledTableRow = styled.tr`
	&:nth-of-type(odd) {
		background-color: #f2efef;
	}
	&:hover {
		background-color: #d8d4d4;
	}
`
const StyledTableCell = styled.td<{ label: string }>`
	padding: 0.5em;
	@media only screen and (max-width: 690px) {
		display: flex;
		padding: 0.75em;
		&::before {
			content: attr(label);
			font-weight: bold;
			width: 35%;
			margin-right: 0.45em;
		}
	}
`

export { StyledTableCell, StyledTableRow }

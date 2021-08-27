import styled from 'styled-components'

const TableCaption = styled.caption`
	display: none;

	@media only screen and (max-width: 690px) {
		display: block;
		margin: 1em 0;
	}
`
const SortSelect = styled.select`
	margin: 0 0.45em;
	border: 1px solid #dcdcdc;
	padding: 0.45em;
	border-radius: 0.25em;
	font-size: 1em;
`

const DirSelect = styled(SortSelect)`
	margin-top: 0.1em;
`

export { DirSelect, SortSelect, TableCaption }

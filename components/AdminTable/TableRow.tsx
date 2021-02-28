import { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '.'

const TableRow = ({
	row,
	headers,
	uniqueKey,
}: {
	row: Object
	headers: string[]
	uniqueKey: string
}) => {
	const { deleteRecord } = useContext(TableContext)

	return (
		<StyledTableRow>
			{deleteRecord && (
				<td>
					<button onClick={() => deleteRecord(row[uniqueKey])}>Remove</button>
				</td>
			)}
			{headers.map((header) => (
				<StyledTableCell key={header} label={header}>
					{JSON.stringify(row[header])}
				</StyledTableCell>
			))}
		</StyledTableRow>
	)
}
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

export default TableRow

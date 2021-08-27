import { useContext } from 'react'
import { TableContext } from '..'
import { StyledTableCell, StyledTableRow } from './styled'

type Row = { [key: string]: any }

type TableRowProps = {
	row: Row
	headers: string[]
	uniqueKey: string
}

const TableRow = ({ row, headers, uniqueKey }: TableRowProps) => {
	const { deleteRecord } = useContext(TableContext)

	return (
		<StyledTableRow>
			{deleteRecord && (
				<td>
					<button type='button' onClick={() => deleteRecord(row[uniqueKey])}>
						Remove
					</button>
				</td>
			)}
			{headers.map(header => (
				<StyledTableCell key={header} label={header}>
					{JSON.stringify(row[header])}
				</StyledTableCell>
			))}
		</StyledTableRow>
	)
}

export default TableRow
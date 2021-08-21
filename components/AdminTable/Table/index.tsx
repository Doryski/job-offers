import React, { useContext } from 'react'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import TableHead from '../TableHead'
import TableRow from '../TableRow'
import { TableContext, TableContextType } from '..'
import TableSortMobile from '../TableSortMobile'
import { StyledTable } from './styled'

type TableProps = {
	headers: string[]
	uniqueKey: string
}

const Table = ({ headers, uniqueKey }: TableProps) => {
	const { currentRecords, sortAscending } = useContext<TableContextType>(
		TableContext
	)

	const cheveron = sortAscending ? (
		<CheveronUp size='20' />
	) : (
		<CheveronDown size='20' />
	)

	return (
		<StyledTable>
			<TableSortMobile headers={headers} />
			<TableHead cheveron={cheveron} headers={headers} />
			<tbody>
				{currentRecords.map(row => (
					<TableRow
						key={row[uniqueKey]}
						row={row}
						headers={headers}
						uniqueKey={uniqueKey}
					/>
				))}
			</tbody>
		</StyledTable>
	)
}

export default Table

import React, { useContext } from 'react'
import styled from 'styled-components'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import TableHead from './TableHead'
import TableRow from './TableRow'
import { TableContext, TableContextType } from '.'
import TableSortMobile from './TableSortMobile'

type TableProps = {
	headers: string[]
	uniqueKey: string
}

const StyledTable = styled.table`
	width: 100%;
	text-align: left;
	border-collapse: collapse;
	overflow-x: auto;
	margin: 1em 0;
	border: 1px solid #dcdcdc;
	overflow-x: auto;
`

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

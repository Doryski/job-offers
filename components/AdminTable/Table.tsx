import React, { useContext } from 'react'
import TableRow from './TableRow'
import { TableContext } from '.'
import styled from 'styled-components'
import TableHead from './TableHead'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import TableSortMobile from './TableSortMobile'

const LoadingInfo = styled.h1`
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Table = ({ headers, uniqueKey }) => {
	const { currentRecords, sortAscending } = useContext(TableContext)

	// if (loading) {
	// 	return <LoadingInfo>Loading data...</LoadingInfo>
	// }

	// show cheveron depending on sort direction
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
				{currentRecords.map((row) => (
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
const StyledTable = styled.table`
	width: 100%;
	text-align: left;
	border-collapse: collapse;
	overflow-x: auto;
	margin: 1em 0;
	border: 1px solid #dcdcdc;
	overflow-x: auto;
`

export default Table

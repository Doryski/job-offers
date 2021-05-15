import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext, TableContextType } from '.'

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

const TableSortMobile = ({ headers }: { headers: string[] }) => {
	const {
		handleColumnHeaderClick,
		sortAscending,
		setSortAscending,
	} = useContext<TableContextType>(TableContext)

	return (
		<TableCaption>
			Sort by
			{/* select category/column to sort */}
			<SortSelect onChange={e => handleColumnHeaderClick(e.target.value)}>
				{headers.map(header => (
					<option key={header} value={header}>
						{header}
					</option>
				))}
			</SortSelect>
			{/* select sort order */}
			<DirSelect
				value={sortAscending ? 'asc' : 'desc'}
				onChange={e =>
					e.target.value === 'asc'
						? setSortAscending(true)
						: setSortAscending(false)
				}>
				<option value='asc'>ascending</option>
				<option value='desc'>descending</option>
			</DirSelect>
		</TableCaption>
	)
}

export default TableSortMobile

import React, { useContext } from 'react'
import { TableContext, TableContextType } from '..'
import { DirSelect, SortSelect, TableCaption } from './styled'

type TableSortMobileProps = { headers: string[] }

const TableSortMobile = ({ headers }: TableSortMobileProps) => {
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

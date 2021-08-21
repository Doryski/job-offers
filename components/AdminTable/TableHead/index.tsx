import React, { useContext } from 'react'
import { TableContext } from '..'
import { StyledHead, StyledHeader } from './styled'

type TableHeadProps = {
	cheveron: JSX.Element
	headers: string[]
}

const TableHead = ({ cheveron, headers }: TableHeadProps) => {
	const { sortKey, handleColumnHeaderClick, deleteRecord } = useContext(
		TableContext
	)

	return (
		<StyledHead>
			<tr>
				{deleteRecord && <StyledHeader>Delete</StyledHeader>}
				{headers.map(header => (
					<StyledHeader
						key={header}
						onClick={() => handleColumnHeaderClick(header)}>
						{header}
						{sortKey === header && cheveron}
					</StyledHeader>
				))}
			</tr>
		</StyledHead>
	)
}

export default TableHead

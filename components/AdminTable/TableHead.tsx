import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '.'

const TableHead = ({ cheveron, headers }) => {
	const { sortKey, handleColumnHeaderClick, deleteRecord } = useContext(
		TableContext
	)

	return (
		<StyledHead>
			<tr>
				{deleteRecord && <StyledHeader>Delete</StyledHeader>}
				{headers.map((header) => (
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
const StyledHead = styled.thead`
	@media only screen and (max-width: 690px) {
		display: none;
	}
`
const StyledHeader = styled.th`
	padding: 1em;
	border-bottom: 2px solid #dcdcdc;
`

export default TableHead

import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext, TableContextType } from '../index'

const StyledSelect = styled.select`
	margin: 0 0.45em;
	border: 1px solid #dcdcdc;
	padding: 0.45em;
	border-radius: 0.25em;
	font-size: 1em;
`

const SelectLabel = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Select = () => {
	const { recordsPerPage, setRecordsPerPage } = useContext<TableContextType>(
		TableContext
	)

	const numsOfRecordsPerPage = [5, 10, 15, 25]
	const handleRecordsPerPageChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => setRecordsPerPage(+e.target.value)
	return (
		<SelectLabel>
			Show
			<StyledSelect
				value={recordsPerPage}
				onChange={handleRecordsPerPageChange}>
				{numsOfRecordsPerPage.map(num => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</StyledSelect>
		</SelectLabel>
	)
}

export default Select

import React, { useContext } from 'react'
import { TableContext, TableContextType } from '../index'
import { SelectLabel, StyledSelect } from './styled'

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

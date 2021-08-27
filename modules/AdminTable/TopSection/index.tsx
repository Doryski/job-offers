import React, { useContext } from 'react'
import { TableContext } from '..'
import Select from '../Select'
import { Input, Search, SearchLabel, Wrapper } from './styled'

const TopSection = () => {
	const { search, handleFilterChange } = useContext(TableContext)

	return (
		<Wrapper>
			<SearchLabel>
				<Search>Search: </Search>
				<Input type='text' value={search || ''} onChange={handleFilterChange} />
			</SearchLabel>
			<Select />
		</Wrapper>
	)
}

export default TopSection

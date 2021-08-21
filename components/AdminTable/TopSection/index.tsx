import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '..'
import Select from '../Select'

export const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 1em;
`

export const SearchLabel = styled.label`
	display: flex;
`
export const Search = styled.span`
	margin: auto 0.75em auto 0;
`
export const Input = styled.input`
	display: block;
	padding: 0.45em 0.75em;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.5;
	border: 1px solid #dcdcdc;
	border-radius: 0.25em;

	@media only screen and (max-width: 690px) {
		width: 50%;
	}
`

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

import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 1em;
`

const SearchLabel = styled.label`
	display: flex;
`
const Search = styled.span`
	margin: auto 0.75em auto 0;
`
const Input = styled.input`
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
export { Wrapper, Search, SearchLabel, Input }

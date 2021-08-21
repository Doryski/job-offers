import styled from 'styled-components'

const StyledHead = styled.thead`
	@media only screen and (max-width: 690px) {
		display: none;
	}
`
const StyledHeader = styled.th`
	padding: 1em;
	border-bottom: 2px solid #dcdcdc;
`
export { StyledHead, StyledHeader }

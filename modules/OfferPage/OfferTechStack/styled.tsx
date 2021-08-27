import styled from 'styled-components'

const TechStackContainer = styled.section`
	margin-top: 1em;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`

export { TechStackContainer }

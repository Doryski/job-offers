import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 1.5em;
	border-top: 2px solid ${({ theme }) => theme.colors.dark};
	display: flex;
	flex-wrap: wrap;
`

const OfferContainer = styled.div`
	background: ${({ theme }) => theme.colors.dark};
	display: flex;
	flex-direction: column;
	padding: 0 1em 0 0;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`

export { Wrapper, OfferContainer }

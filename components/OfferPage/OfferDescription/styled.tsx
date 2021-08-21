import styled from 'styled-components'

const DescriptionContainer = styled.section`
	margin-top: 1.875em;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
const DescriptionContent = styled.div`
	color: ${({ theme }) => theme.colors.title};
`

export { DescriptionContainer, DescriptionContent }

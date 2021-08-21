import styled from 'styled-components'

const HeaderWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 1.25em;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export { HeaderWrapper }

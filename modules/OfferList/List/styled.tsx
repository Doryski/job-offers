import styled from 'styled-components'

const ListContainer = styled.section`
	display: flex;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	flex-direction: column;
	margin-right: 0.5em;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0;
	}
`

export { ListContainer }

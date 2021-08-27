import styled from 'styled-components'

const ListContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: 1025px) {
		width: 100%;
	}
`
const Container = styled.div`
	width: 100%;
	height: 92vh;
	background: ${({ theme }) => theme.colors.dark};
	display: flex;
	flex-direction: column;
`

export { ListContainer, Container }

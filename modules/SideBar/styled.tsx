import styled from 'styled-components'

const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`

export { Container }

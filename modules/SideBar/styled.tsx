import styled from 'styled-components'
import { Menu } from '@material-ui/icons'

const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`
const Burger = styled(Menu)`
	cursor: pointer;
`

export { Container, Burger }

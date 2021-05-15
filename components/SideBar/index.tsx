import styled from 'styled-components'
import SidebarList from './SidebarList'

export const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`
const SideBar = () => (
	<Container>
		<SidebarList />
	</Container>
)

export default SideBar

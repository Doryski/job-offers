import styled from 'styled-components'
import SidebarList from './SidebarList'

const SideBar = () => {
	return (
		<Container>
			<SidebarList />
		</Container>
	)
}

export const Container = styled.div`
	min-width: 300px;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
`
export const LogoWrapper = styled.div`
	width: 120px;
	box-sizing: content-box;
	padding: 0.9375em 4em;
	margin: auto;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

export const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;
	color: rgba(0, 0, 0, 0.54);
`

export default SideBar

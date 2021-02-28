import styled from 'styled-components'
import Header from './Header'

const Layout = ({
	children,
	admin,
}: {
	children: React.ReactNode
	admin?: boolean
}) => (
	<MainContainer>
		<Header admin={admin} />
		{children}
	</MainContainer>
)

export const MainContainer = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
`

export default Layout

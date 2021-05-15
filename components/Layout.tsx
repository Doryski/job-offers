import styled from 'styled-components'
import Header from './Header'

export const MainContainer = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
`

const Layout = ({
	children,
	admin,
}: {
	children: React.ReactNode
	admin?: boolean
}) => (
	<MainContainer>
		<Header admin={!!admin} />
		{children}
	</MainContainer>
)
Layout.defaultProps = {
	admin: false,
}

export default Layout

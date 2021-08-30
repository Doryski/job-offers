import Header from '../Header'
import { MainContainer } from './styled'

type LayoutProps = {
	children?: React.ReactNode
	admin?: boolean
	subContainer?: JSX.Element
	handleLogoClick?: VoidFunction
}

const Layout = ({
	children,
	admin,
	subContainer,
	handleLogoClick,
}: LayoutProps) => (
	<MainContainer>
		<Header admin={!!admin} handleLogoClick={handleLogoClick} />
		{subContainer}
		{children}
	</MainContainer>
)
Layout.defaultProps = {
	admin: false,
	subContainer: null,
	children: null,
	handleLogoClick: null,
}

export default Layout

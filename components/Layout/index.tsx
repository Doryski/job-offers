import Header from '../Header'
import { MainContainer } from './styled'

type LayoutProps = {
	children?: React.ReactNode
	admin?: boolean
	subContainer?: JSX.Element
}

const Layout = ({ children, admin, subContainer }: LayoutProps) => (
	<MainContainer>
		<Header admin={!!admin} />
		{subContainer}
		{children}
	</MainContainer>
)
Layout.defaultProps = {
	admin: false,
	subContainer: null,
	children: null,
}

export default Layout

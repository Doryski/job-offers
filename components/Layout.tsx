import styled from 'styled-components'
import Header from './Header'
import Filters from './Filters'

const Layout = ({ children }: { children: React.ReactNode }) => (
	<MainContainer>
		<Header />
		<Filters />
		<SubContainer>
			<OfferContainer>
				<OfferContainerScroll>{children}</OfferContainerScroll>
			</OfferContainer>
		</SubContainer>
	</MainContainer>
)

export const MainContainer = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
`
export const SubContainer = styled.div`
	display: flex;
	flex: 1;
`
export const OfferContainer = styled.div`
	width: 60%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	@media (max-width: 1025px) {
		width: 100%;
	}
`
export const OfferContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

export default Layout

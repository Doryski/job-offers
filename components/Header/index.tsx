import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import AddOffer from '../AddOfferModal/AddOffer'
import CustomButton from '../shared/CustomButton'
import Navigation from './Navigation'
import theme from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import DrawerComponent from './DrawerComponent'
import useDeviceDetect from '../../helpers/useDeviceDetect'
import Link from 'next/link'

const Header = () => {
	const {
		isDialogOpen: isSideBarOpen,
		close: closeSideBar,
		toggle: toggleSideBar,
	} = useDialogHandler(false)
	const isMobile = useDeviceDetect(1105)

	return (
		<Container>
			<Link href='/' shallow>
				<a>
					<LogoWrapper>Some logo</LogoWrapper>
				</a>
			</Link>
			{!isMobile && <Navigation />}
			<Wrapper>
				<AddOffer />
				<CustomButton
					fWeight={theme.fontWeight[400]}
					icon
					pink
					padding='0.375em 0.625em 0.375em 1.125em'
					margin='0 0.9375em 0 0'>
					Sign in
				</CustomButton>

				<Wrapper>
					<IconButton onClick={toggleSideBar}>
						<StyledMenuIcon />
					</IconButton>
				</Wrapper>
			</Wrapper>

			{isSideBarOpen && (
				<DrawerComponent handleClose={closeSideBar} isOpen={isSideBarOpen} />
			)}
		</Container>
	)
}
export const Container = styled.header`
	min-height: 68px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.primary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
	width: 100%;
`

export const LogoWrapper = styled.div`
	width: 120px;
	float: left;
	margin: 7px 15px 0px 25px;
`
export const Wrapper = styled.div`
	display: flex;
	height: 38px;
	margin-right: 0.75em;
	align-items: center;
	@media (max-width: 600px) {
		margin: 0;
	}
`
const StyledMenuIcon = styled(MenuIcon)`
	color: ${({ theme }) => theme.colors.span};
`

export default Header

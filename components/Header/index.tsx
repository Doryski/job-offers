import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import AddOffer from '../AddOfferModal/AddOffer'
import CustomButton from '../shared/CustomButton'
import Navigation from './Navigation'
import theme from '../../theme'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const Header = ({ admin = false }: { admin?: boolean }) => {
	const isMobile = useDeviceDetect(1105)
	const [session, loading] = useSession()
	const router = useRouter()

	const handleSignOut = async () => {
		const isProfilePage = router.pathname === '/user/profile'
		const config = isProfilePage
			? {
					redirect: false,
					callbackUrl: '/',
			  }
			: {
					redirect: false,
			  }
		const data = await signOut(config)
		if (isProfilePage) {
			// @ts-ignore
			router.push(data.url)
		}
	}

	return (
		<Container admin={admin}>
			<Link href='/'>
				<a>
					<LogoWrapper>Job offers</LogoWrapper>
				</a>
			</Link>
			{!isMobile && <Navigation />}
			<Wrapper>
				{!session && !loading && (
					<>
						<CustomButton
							handleClick={signIn}
							fWeight={theme.fontWeight[400]}
							pink
							margin='0 0.875em 0 0.375em'
							padding='0.625em 1.125em'>
							Log in
						</CustomButton>
						<Link href='/auth/signup'>
							<a>
								<CustomButton
									fWeight={theme.fontWeight[400]}
									margin='0 0.875em 0 0.375em'
									padding='0.625em 1.125em'>
									Sign up
								</CustomButton>
							</a>
						</Link>
					</>
				)}
				{session && (
					<>
						<AddOffer />
						<Link href='/user/profile'>
							<a>
								<CustomButton
									pink
									fWeight={theme.fontWeight[400]}
									margin='0 0.875em 0 0.375em'
									padding='0.625em 1.125em'>
									My Profile
								</CustomButton>
							</a>
						</Link>
						<CustomButton
							handleClick={handleSignOut}
							fWeight={theme.fontWeight[400]}
							margin='0 0.875em 0 0.375em'
							padding='0.625em 1.125em'>
							Log out
						</CustomButton>
					</>
				)}
			</Wrapper>
		</Container>
	)
}
export const Container = styled.header<{ admin?: boolean }>`
	min-height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme, admin }) =>
		admin ? theme.colors.admin : theme.colors.primary};
	border-bottom: 1px solid
		${({ theme, admin }) => (admin ? theme.colors.admin : theme.colors.divider)};
	width: 100%;
`

export const LogoWrapper = styled.div`
	width: 120px;
	float: left;
	margin-left: 1em;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.25rem;
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

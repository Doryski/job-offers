import AddOffer from '@/modules/AddOfferModal/AddOffer'
import CustomButton from '@/shared-components/CustomButton'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import useSignOut from '@/hooks/useSignOut'
import Navigation from '../Navigation'
import { Container, LogoWrapper, Wrapper } from './styled'
import SideBar from '../SideBar'

type HeaderProps = { admin: boolean; handleLogoClick?: VoidFunction }

const Header = ({ admin, handleLogoClick }: HeaderProps) => {
	const [session, loading] = useSession()
	const { isMobile } = useDeviceDetect()
	const handleSignOut = useSignOut()

	const loginButton = (
		<CustomButton
			handleClick={signIn}
			fWeight={400}
			primary
			margin='0 0.875em 0 0.375em'
			padding='0.625em 1.125em'>
			Log in
		</CustomButton>
	)

	const logoutButton = (
		<CustomButton
			handleClick={handleSignOut}
			fWeight={400}
			margin={`0 ${isMobile ? '0.875em' : '0'} 0 0.375em`}
			padding='0.625em 1.125em'>
			Log out
		</CustomButton>
	)

	return (
		<Container admin={admin}>
			<Link href='/' shallow>
				<a>
					<LogoWrapper onClick={handleLogoClick}>Job offers</LogoWrapper>
				</a>
			</Link>
			{isMobile ? (
				<Wrapper>
					{!session && !loading && loginButton}
					{session && logoutButton}
					<SideBar />
				</Wrapper>
			) : (
				<>
					<Navigation />
					<Wrapper>
						{!session && !loading && (
							<>
								{loginButton}
								<Link href='/auth/signup'>
									<a>
										<CustomButton
											fWeight={400}
											margin='0 0 0 0.375em'
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
											primary
											fWeight={400}
											margin='0 0.875em 0 0.375em'
											padding='0.625em 1.125em'>
											My Profile
										</CustomButton>
									</a>
								</Link>
								{logoutButton}
							</>
						)}
					</Wrapper>
				</>
			)}
		</Container>
	)
}

Header.defaultProps = {
	handleLogoClick: null,
}

export default Header

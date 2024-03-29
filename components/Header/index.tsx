import styled from 'styled-components'
import AddOffer from '@/components/AddOfferModal/AddOffer'
import CustomButton from '@/components/shared/CustomButton'
// import useDeviceDetect from '@/hooks/useDeviceDetect'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import Navigation from './Navigation'

export const Container = styled.header<{ admin?: boolean }>`
	min-height: 8vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme, admin }) =>
		admin ? theme.colors.admin : theme.colors.white};
	border-bottom: 1px solid
		${({ theme, admin }) => (admin ? theme.colors.admin : theme.colors.divider)};
	width: 100%;
`

export const LogoWrapper = styled.div`
	width: 120px;
	float: left;
	margin-left: 1.5em;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.25rem;
`
export const Wrapper = styled.nav`
	display: flex;
	height: 38px;
	margin-right: 1.5em;
	align-items: center;
	@media (max-width: 600px) {
		margin: 0;
	}
`

const Header = ({ admin }: { admin: boolean }) => {
	// const { isDesktop } = useDeviceDetect(760, 1105)
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
			<Navigation />
			<Wrapper>
				{!session && !loading && (
					<>
						<CustomButton
							handleClick={signIn}
							fWeight={400}
							primary
							margin='0 0.875em 0 0.375em'
							padding='0.625em 1.125em'>
							Log in
						</CustomButton>
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
						<CustomButton
							handleClick={handleSignOut}
							fWeight={400}
							margin='0 0 0 0.375em'
							padding='0.625em 1.125em'>
							Log out
						</CustomButton>
					</>
				)}
			</Wrapper>
		</Container>
	)
}

export default Header

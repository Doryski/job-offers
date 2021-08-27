import AddOffer from '@/components/AddOfferModal/AddOffer'
import CustomButton from '@/shared-components/CustomButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import Navigation from './Navigation'
import { Container, LogoWrapper, Wrapper } from './styled'

type HeaderProps = { admin: boolean }

const Header = ({ admin }: HeaderProps) => {
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
			router.push(data!.url)
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

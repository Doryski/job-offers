import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

export default function useSignOut() {
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

	return handleSignOut
}

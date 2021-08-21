import Center from '@/shared-components/Center'
import { useRouter } from 'next/router'
import useRedirect from '@/hooks/useRedirect'
import usePrefetch from '@/hooks/usePrefetch'

const NotFound = () => {
	const router = useRouter()
	const { isRedirecting, countdown } = useRedirect(router, 3)
	usePrefetch('/', router)

	return (
		<Center height='100vh' direction='column'>
			<h2>Oops...</h2>
			<h3>That page cannot be found.</h3>
			{isRedirecting ? (
				<p>Redirecting to homepage...</p>
			) : (
				<p>You will be redirected to homepage in {countdown} seconds...</p>
			)}
		</Center>
	)
}

export default NotFound

import Center from '@/components/shared/Center'
import { useRouter } from 'next/router'
import useRedirect from '@/hooks/useRedirect'

const NotFound = () => {
	const router = useRouter()
	const { isRedirecting, countdown } = useRedirect(3, router, {
		prefetch: true,
	})
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

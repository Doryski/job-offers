import { useRouter } from 'next/router'
import Center from '../components/shared/Center'
import useRedirect from '../hooks/useRedirect'

const NotFound = () => {
	const router = useRouter()
	const { isRedirecting, countdown } = useRedirect(3, router, {
		prefetch: true,
	})
	return (
		<Center height='100vh' direction='column'>
			<div></div>
			<h1>Oops...</h1>
			<h2>That page cannot be found.</h2>
			{isRedirecting ? (
				<p>Redirecting to homepage...</p>
			) : (
				<p>You will be redirected to homepage in {countdown} seconds...</p>
			)}
		</Center>
	)
}

export default NotFound

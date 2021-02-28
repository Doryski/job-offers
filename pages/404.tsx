import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const NotFound = () => {
	const router = useRouter()
	const [count, setCount] = useState(3)
	const [isRedirecting, setIsRedirecting] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setCount((prevCount) => prevCount - 1)
		}, 1000)
		if (count <= 0) {
			setIsRedirecting(true)
			router.push('/')
			// return ?
		}
	}, [count])

	const homepageLink = (
		<Link href={'/'}>
			<a>Homepage</a>
		</Link>
	)
	return (
		<div>
			<h1>Oops...</h1>
			<h2>That page cannot be found.</h2>
			{isRedirecting ? (
				<p>Redirecting to {homepageLink}...</p>
			) : (
				<p>
					You will be redirected to {homepageLink} in {count} seconds...
				</p>
			)}
		</div>
	)
}

export default NotFound

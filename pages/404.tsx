import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const NotFound = () => {
	const router = useRouter()
	const [count, setCount] = useState(3)
	useEffect(() => {
		setTimeout(() => {
			setCount((prevCount) => prevCount - 1)
		}, 1000)
		if (count <= 0) router.push('/')
	}, [count])

	return (
		<div>
			<h1>Oops...</h1>
			<h2>That page cannot be found.</h2>
			<p>
				You will be redirected to
				<Link href='/'>
					<a>Homepage</a>
				</Link>
				in {count} seconds...
			</p>
		</div>
	)
}

export default NotFound

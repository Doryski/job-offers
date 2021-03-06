import Link from 'next/link'
import Center from '../shared/Center'

const NotAuthorized = () => {
	return (
		<Center height='100vh'>
			You are not authorized to see this page. Go back to&nbsp;
			<Link href='/'>
				<a>homepage</a>
			</Link>
		</Center>
	)
}
export default NotAuthorized

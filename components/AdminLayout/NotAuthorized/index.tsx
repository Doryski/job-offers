import Link from 'next/link'
import Center from '@/shared-components/Center'

const NotAuthorized = () => (
	<Center height='100vh'>
		You are not authorized to see this page. Go back to&nbsp;
		<Link href='/'>
			<a>homepage</a>
		</Link>
	</Center>
)
export default NotAuthorized

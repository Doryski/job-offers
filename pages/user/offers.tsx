import { useSession } from 'next-auth/client'
import Layout from '../../components/Layout'
import Center from '../../components/shared/Center'
import useApi from '../../hooks/useApi'

const UserOffers = () => {
	const [session] = useSession()
	const { data, error, dataLoading } = useApi(
		'/offers/employer' + session.user.id
	) 

	return (
		<Layout>
			<Center height='100vh'>
				{error && 'Failed to load data'}
				{dataLoading && 'Loading data...'}
				{data && JSON.stringify(data)}
			</Center>
		</Layout>
	)
}

export default UserOffers

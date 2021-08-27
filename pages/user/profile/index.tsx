import { useSession } from 'next-auth/client'
import Link from 'next/link'
import Layout from '@/modules/Layout'
import Center from '@/shared-components/Center/styled'
import CustomButton from '@/shared-components/CustomButton'
import useApi from '@/hooks/useApi'
import AccountInfo from '@/modules/AccountInfo'
import { SubContainer } from '@/shared-components/SubContainer/styled'

const Profile = () => {
	const [session] = useSession()
	const { data, error, loading: dataLoading } = useApi(
		session ? `/api/user/${session?.user?.id}` : null
	)
	return (
		<Layout>
			<SubContainer>
				{!session ? (
					<Center height='90vh'>Log in to see this page.</Center>
				) : (
					<Center height='90vh' direction='column'>
						Profile page of user {session?.user?.email} <br />
						{session?.user?.admin && 'Welcome Admin!'}
						{error && 'Failed to load data.'}
						{dataLoading && 'Loading data...'}
						{data?.data && (
							<>
								<AccountInfo info={data?.data} />
								<Link href='/user/offers'>
									<a>
										<CustomButton>Show my offers</CustomButton>
									</a>
								</Link>
							</>
						)}
					</Center>
				)}
			</SubContainer>
		</Layout>
	)
}

export default Profile

import { useSession } from 'next-auth/client'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Center from '../../components/shared/Center'
import CustomButton from '../../components/shared/CustomButton'
import devlog from '../../debug/devlog'
import useApi from '../../hooks/useApi'

const Profile = () => {
	const [session] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? `/api/user/${session.user.id}` : null
	)
	return (
		<Layout>
			<SubContainer>
				{!session ? (
					<Center height='90vh'>Log in to see this page.</Center>
				) : (
					<Center height='90vh' direction='column'>
						Profile page of user {session?.user.email} <br />
						{session?.user.admin && 'Welcome Admin!'}
						{error && 'Failed to load data.'}
						{dataLoading && 'Loading data...'}
						{data && (
							<>
								<AccountData>
									{Object.entries(data?.data).map(([key, value]) => (
										<>
											<h3>{key}</h3>
											<span>{value}</span>
										</>
									))}
								</AccountData>
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

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const AccountData = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	width: 100%;
`

export default Profile

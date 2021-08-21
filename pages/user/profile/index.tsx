import { useSession } from 'next-auth/client'
import Link from 'next/link'
import { Fragment } from 'react'
import styled from 'styled-components'
import Layout from '@/components/Layout'
import Center from '@/shared-components/Center'
import CustomButton from '@/shared-components/CustomButton'
import useApi from '@/hooks/useApi'

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 92vh;
`

export const AccountData = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	width: 100%;
`

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
								<AccountData>
									{Object.entries(data?.data).map(([key, value]) => (
										<Fragment key={key}>
											<h3>{key}</h3>
											<span>{value as string}</span>
										</Fragment>
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

export default Profile

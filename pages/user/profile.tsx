import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import ActionPanel from '../../components/ActionPanel'
import Header from '../../components/Header'
import { DOMAIN } from '../../helpers/utils'
import { EmployerType } from '../../types'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	console.log('session serverSideProps', session)
	if (!session) return { notFound: true }
	const res = await fetch(DOMAIN + '/api/user/' + session.user.id)
	const { data }: { data: EmployerType } = await res.json()
	return {
		props: {
			profile: data || {},
		},
	}
}

const Profile = ({ profile }: { profile: EmployerType }) => {
	const router = useRouter()
	const [session, loading] = useSession()
	if (loading) return <div>Loading page...</div>
	console.log('profile', profile)

	const buyPremium = () => {
		return
	}
	useEffect(() => {
		if (!session) {
			router.push('/auth/login')
		}
	}, [session])

	return (
		<PageWrapper>
			<Header />
			<SubContainer>
				<div>
					Profile page of user {session?.user.email} <br />
					{session?.user.admin && <span>Welcome Admin!</span>}
					<AccountData>
						{Object.entries(profile).map(([key, value]) => (
							<>
								<h3>{key}</h3>
								<span>
									{value}
									{key === 'accountType' && value === 'basic' && (
										<button onClick={buyPremium}>Buy premium</button>
									)}
								</span>
							</>
						))}
					</AccountData>
				</div>
				{/* <ActionPanel /> */}
			</SubContainer>
		</PageWrapper>
	)
}

export const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`
export const SubContainer = styled.div`
	/* display: grid;
	grid-template-columns: 85vw 15vw; */
	/* width: 100%;
	height: 100%; */
	display: flex;
	flex-direction: column;
`

export const AccountData = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	width: 100%;
`

export default Profile

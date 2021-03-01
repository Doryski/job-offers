import { GetServerSideProps } from 'next'
import { getSession, Session, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import getDomain from '../../helpers/getDomain'
import { EmployerType } from '../../types'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return { notFound: true }
	const res = await fetch(getDomain() + '/api/user/' + session.user.id)
	const { data }: { data: EmployerType } = await res.json()
	console.log('get api/user/[id] res: ', data)
	// console.log('get api/user/[id]: ', data)
	return {
		props: {
			profile: data || {},
			// session,
		},
	}
}

const Profile = ({
	profile,
}: // session,
{
	profile: EmployerType
	// session: Session
}) => {
	const router = useRouter()
	const [session] = useSession()

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
									{/* {key === 'accountType' && value === 'basic' && (
										<button onClick={buyPremium}>Buy premium</button>
									)} */}
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
	display: flex;
	flex-direction: column;
`

export const AccountData = styled.section`
	display: grid;
	grid-template-columns: repeat(2, auto);
	width: 100%;
`

export default Profile

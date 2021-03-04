import { useSession } from 'next-auth/client'
import styled from 'styled-components'
import Header from '../../components/Header'
import Center from '../../components/shared/Center'
import devlog from '../../debug/devlog'
import useApi from '../../hooks/useApi'

const Profile = () => {
	const [session] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? `/api/user/${session.user.id}` : null
	)
	return (
		<PageWrapper>
			<Header />
			<SubContainer>
				<div>
					Profile page of user {session?.user.email} <br />
					{session?.user.admin && <span>Welcome Admin!</span>}
					{error && <Center>Failed to load.</Center>}
					{dataLoading && <Center>Loading...</Center>}
					{data && (
						<AccountData>
							{Object.entries(data?.data).map(([key, value]) => (
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
					)}
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

import Link from 'next/link'
import styled from 'styled-components'

const TopNav = () => {
	return (
		<Wrapper>
			<nav>
				<ul>
					<Link href='/'>
						<li>App home</li>
					</Link>
					<li>Settings</li>
					<li>Logout</li>
				</ul>
			</nav>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	grid-area: topNav;
	background-color: grey;
`
export default TopNav

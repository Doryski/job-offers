import Link from 'next/link'
import styled from 'styled-components'

const LeftNav = () => {
	return (
		<Wrapper>
			<nav>
				<TableList>
					<Link href={'/admin/offers'}>
						<ListItem>Offers</ListItem>
					</Link>
					<Link href={'/admin/employers'}>
						<ListItem>Employers</ListItem>
					</Link>
					<Link href={'/admin/applicants'}>
						<ListItem>Applicants</ListItem>
					</Link>
				</TableList>
			</nav>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	background-color: lightgray;
`

const TableList = styled.ul`
	display: flex;
	flex-direction: column;
`
const ListItem = styled.li`
	text-align: center;
	padding: 0.5em;
	background-color: transparent;
	transition: background-color 0.3s;
	&:hover {
		background-color: gray;
	}
`

export default LeftNav

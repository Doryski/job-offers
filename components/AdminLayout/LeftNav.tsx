import Link from 'next/link'
import styled from 'styled-components'

const LeftNav = () => {
	const ADMIN_TABLES_LINKS = [
		{ path: '/admin/offers', title: 'Offers' },
		{ path: '/admin/employers', title: 'Employers' },
		{ path: '/admin/applicants', title: 'Applicants' },
	]

	return (
		<Wrapper>
			<nav>
				<TableList>
					{ADMIN_TABLES_LINKS.map(({ path, title }) => (
						<Link href={path} key={title}>
							<ListItem>{title}</ListItem>
						</Link>
					))}
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

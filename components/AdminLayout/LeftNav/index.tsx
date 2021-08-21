import Link from 'next/link'
import { ListItem, TableList, Wrapper } from './styled'

const ADMIN_TABLES_LINKS = [
	{ path: '/admin/offers', title: 'Offers' },
	{ path: '/admin/employers', title: 'Employers' },
	{ path: '/admin/applicants', title: 'Applicants' },
]

const LeftNav = () => (
	<Wrapper>
		<nav>
			<TableList>
				{ADMIN_TABLES_LINKS.map(({ path, title }) => (
					<Link href={path} key={title}>
						<a>
							<ListItem>{title}</ListItem>
						</a>
					</Link>
				))}
			</TableList>
		</nav>
	</Wrapper>
)

export default LeftNav

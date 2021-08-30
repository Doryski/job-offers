import Link from 'next/link'
import { useRouter } from 'next/router'
import CustomButton from '@/shared-components/CustomButton'
import TechList from './TechList'
import { Container, LinkBtn } from './styled'
import { TechName } from './TechList/styled'

const TechFilters = () => {
	const { query } = useRouter()
	return (
		<Container>
			<Link href='/' shallow>
				<LinkBtn>
					<CustomButton
						padding='.7em 3.15em'
						minWidth='60px'
						margin='.25em .5em .25em 0'
						active={!query.tech}
						fWeight={!query.tech ? 600 : 400}>
						<TechName all>All</TechName>
					</CustomButton>
				</LinkBtn>
			</Link>
			<TechList />
		</Container>
	)
}

export default TechFilters

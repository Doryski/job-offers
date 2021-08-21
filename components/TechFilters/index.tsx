import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CustomButton from '@/shared-components/CustomButton'
import TechList, { TechName } from './TechList'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(7, auto);
	width: 100%;

	@media (max-width: 1025px) {
		padding: 1.875em;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
`

export const LinkBtn = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
`

const TechFilters = () => {
	const { query } = useRouter()
	return (
		<Container>
			<Link href='/' shallow>
				<LinkBtn>
					<CustomButton
						padding='.7em 3.15em'
						minWidth='60px'
						margin='.25em 0'
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

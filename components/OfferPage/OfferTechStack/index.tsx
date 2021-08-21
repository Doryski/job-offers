import styled from 'styled-components'
import TechRange from '@/shared-components/TechRange'
import Typography from '@/shared-components/Typography'
import { OfferType } from '@/types'
import { Wrapper } from '../styled'

export const TechStackContainer = styled.section`
	margin-top: 1em;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`

const OfferTechStack = ({
	technology,
}: {
	technology: OfferType['technology']
}) => (
	<TechStackContainer>
		<Typography
			color='title'
			fWeight={500}
			fontSize='xl'
			align='left'
			margin='0.625em 1.25em'>
			Tech stack
		</Typography>
		<Wrapper>
			{technology &&
				technology
					.sort((a, b) => (a.techLvl < b.techLvl ? 1 : -1))
					.map(({ tech, techLvl }) => (
						<TechRange key={tech} range={+techLvl} tech={tech} />
					))}
		</Wrapper>
	</TechStackContainer>
)

export default OfferTechStack

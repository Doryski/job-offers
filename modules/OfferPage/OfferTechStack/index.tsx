import TechRange from '@/shared-components/TechRange'
import { Typography } from '@/shared-components/Typography'
import { OfferType } from '@/types'
import { Wrapper } from '../styled'
import { TechStackContainer } from './styled'

type OfferTechStackProps = {
	technology: OfferType['technology']
}
const OfferTechStack = ({ technology }: OfferTechStackProps) => (
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

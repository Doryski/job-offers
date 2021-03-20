import styled from 'styled-components'
import TechRange from '@/components/shared/TechRange'
import Typography from '@/components/shared/Typography'
import { Wrapper } from './StyledComponents'
import { OfferType } from '@/types'

const OfferTechStack = ({
	technology,
}: {
	technology: OfferType['technology']
}) => {
	return (
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
				{technology
					.sort((a, b) => (a.techLvl < b.techLvl ? 1 : -1))
					.map(({ tech, techLvl }) => (
						<TechRange key={tech} range={+techLvl} tech={tech} />
					))}
			</Wrapper>
		</TechStackContainer>
	)
}
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
export default OfferTechStack

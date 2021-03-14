import styled from 'styled-components'
import TechRange from '../shared/TechRange'
import Typography from '../shared/Typography'
import { Wrapper } from './StyledComponents'
import { OfferType } from '../../types'
import devlog from '../../debug/devlog'

const OfferTechStack = ({
	technology,
}: {
	technology: OfferType['technology']
}) => {
	const techArray =
		!technology || technology.indexOf('[') !== 0 ? [] : JSON.parse(technology)
	devlog(techArray)
	return (
		<TechStackContainer>
			<Typography
				color={'title'}
				fWeight={500}
				fontSize='xl'
				align='left'
				margin='0.625em 1.25em'>
				Tech stack
			</Typography>
			<Wrapper>
				{techArray.map(({ tech, techLvl }) => (
					<TechRange key={tech} range={+techLvl} tech={tech} />
				))}
			</Wrapper>
		</TechStackContainer>
	)
}
export const TechStackContainer = styled.div`
	margin-top: 1em;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
export default OfferTechStack

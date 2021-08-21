import styled from 'styled-components'
import { OfferPageDataType } from '@/types'
import OfferHeader from './OfferHeader'
import OfferTechStack from './OfferTechStack'
import OfferApplySection from './OfferApplySection'
import OfferDescription from './OfferDescription'

export const OfferContainer = styled.div`
	background: ${({ theme }) => theme.colors.dark};
	display: flex;
	flex-direction: column;
	padding: 0 1em 0 0;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`

const OfferPage = ({ offer }: { offer: OfferPageDataType }) => (
	<OfferContainer>
		<OfferHeader offer={offer} />
		<OfferTechStack technology={offer.technology} />
		<OfferDescription description={offer.description} />
		<OfferApplySection offer={offer} />
	</OfferContainer>
)

export default OfferPage

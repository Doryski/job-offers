import OfferHeader from '@/components/OfferPage/OfferHeader'
import OfferTechStack from '@/components/OfferPage/OfferTechStack'
import OfferDescription from '@/components/OfferPage/OfferDescription'
import OfferApplySection from '@/components/OfferPage/OfferApplySection'
import styled from 'styled-components'

const OfferPage = ({ offer }) => {
	return (
		<OfferContainer>
			<OfferHeader offer={offer} />
			<OfferTechStack technology={offer.technology} />
			<OfferDescription description={offer.description} />
			<OfferApplySection offer={offer} />
		</OfferContainer>
	)
}

export const OfferContainer = styled.div`
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1em 0 0;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`

export default OfferPage
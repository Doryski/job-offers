import { useRouter } from 'next/router'
import styled from 'styled-components'
import filterOffers from '../../helpers/filterOffers'
import sortOffers from '../../helpers/sortOffers'
import OfferType from '../../types/OfferType'
import OfferCard from '../OfferCard'

const List = ({ offers }: { offers: OfferType[] }) => {
	const { query } = useRouter()
	const filteredOffers = filterOffers(offers, query)
	const sortedOffers = sortOffers(filteredOffers, query.sort as string)

	return (
		<ListContainer>
			{sortedOffers.map((offer, index) => (
				<OfferCard key={offer.uuid} offer={offer} index={index} />
			))}
		</ListContainer>
	)
}
export const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	overflow: auto;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0;
	}
`

export default List

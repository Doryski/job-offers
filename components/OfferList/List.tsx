import { useRouter } from 'next/router'
import styled from 'styled-components'
import filterOffers from '../../helpers/filterOffers'
import sortOffers from '../../helpers/sortOffers'
import { OfferPageDataType } from '../../types'
import OfferCard from '../OfferCard'

const List = ({
	data,
	setCurrentOffer,
}: {
	data: OfferPageDataType[]
	setCurrentOffer
}) => {
	const { query } = useRouter()
	const filteredOffers = filterOffers(data, query)
	const sortedOffers = sortOffers(filteredOffers, query.sort as string)

	return (
		<ListContainer>
			{sortedOffers.map((offerInfo, index) => {
				return (
					<OfferCard
						setCurrentOffer={setCurrentOffer}
						key={offerInfo.offerId}
						offerInfo={offerInfo}
						index={index}
					/>
				)
			})}
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

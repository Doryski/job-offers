import { useRouter } from 'next/router'
import filterOffers from 'utils/filterOffers'
import sortOffers from 'utils/sortOffers'
import { OfferPageDataType } from '@/types'
import Center from '@/shared-components/Center/styled'
import OfferCard from '../../OfferCard'
import { ListContainer } from './styled'

type ListProps = {
	data: OfferPageDataType[]
	error: string
	handleOfferCardClick: (offer: OfferPageDataType) => void
}

const List = ({ data, handleOfferCardClick, error }: ListProps) => {
	const { query } = useRouter()
	if (error) {
		return (
			<ListContainer>
				<Center>{error}</Center>
			</ListContainer>
		)
	}
	const filteredOffers = filterOffers(data, query)
	const sortedOffers = sortOffers(filteredOffers, query.sort as string)

	return (
		<ListContainer>
			{sortedOffers.map((offer, index) => (
				<OfferCard
					index={index}
					handleOfferCardClick={() => handleOfferCardClick(offer)}
					key={offer.offerId}
					offer={offer}
				/>
			))}
		</ListContainer>
	)
}

export default List

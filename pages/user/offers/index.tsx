import moment from 'moment'
import { useSession } from 'next-auth/client'
import Layout from '@/components/Layout'
import Center from '@/shared-components/Center/styled'
import { DATE_FORMAT } from '@/utils/vars'
import useApi from '@/hooks/useApi'
import { OfferType } from '@/types'

type UserOfferType = {
	offerId: OfferType['uuid']
	title: OfferType['title']
	empType: OfferType['empType']
	expLvl: OfferType['expLvl']
	description: OfferType['description']
	dateAdded: OfferType['dateAdded']
}

type UserOfferTypeInput = UserOfferType & { technology: string }
type UserOfferTypeOutput = UserOfferType & {
	technology: OfferType['technology']
}

const UserOffers = () => {
	const [session] = useSession()
	const { data, error, loading: dataLoading } = useApi(
		session ? `/api/offers/employer` : null
	)
	const offers: UserOfferTypeOutput[] = data?.data?.map(
		(offer: UserOfferTypeInput) => ({
			...offer,
			dateAdded: moment(+offer.dateAdded).format(DATE_FORMAT),
			technology: JSON.parse(offer.technology),
		})
	)

	const headers = ['Title', 'Exp. lvl', 'Date created']
	return (
		<Layout>
			<Center height='92vh'>
				{!session ? (
					'Log in to see this page.'
				) : (
					<>
						{error && 'Failed to load data.'}
						{dataLoading && 'Loading data...'}
						{offers && (
							<ul>
								<li>
									<ul style={{ display: 'flex' }}>
										{headers.map(h => (
											<li key={h}>{h} |</li>
										))}
									</ul>
								</li>
								{offers.map(offer => (
									<li key={offer.offerId}>
										<ul>
											<li>
												{offer.title}, {offer.expLvl}, {offer.dateAdded}
											</li>
										</ul>
									</li>
								))}
							</ul>
						)}
					</>
				)}
			</Center>
		</Layout>
	)
}

export default UserOffers

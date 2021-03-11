import moment from 'moment'
import { useSession } from 'next-auth/client'
import Layout from '../../components/Layout'
import Center from '../../components/shared/Center'
import devlog from '../../debug/devlog'
import { DATE_FORMAT } from '../../helpers/utils'
import useApi from '../../hooks/useApi'
type OfferType = {
	offerId: string
	title: string
	empType: string
	expLvl: string
	technology: string
	description: string
	dateAdded: string
}

const UserOffers = () => {
	const [session] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? `/api/offers/employer` : null
	)
	const offers: OfferType[] = data?.data?.map((offer: OfferType) => ({
		...offer,
		dateAdded: moment(+offer.dateAdded).format(DATE_FORMAT),
		technology: JSON.parse(offer.technology),
	}))
	// const headers = Object.keys(offers[0])
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
										{headers.map((h) => {
											return <li key={h}>{h} |</li>
										})}
									</ul>
								</li>
								{offers.map((offer) => {
									return (
										<li key={offer.offerId}>
											<ul>
												<li>
													{offer.title}, {offer.expLvl}, {offer.dateAdded}
												</li>
											</ul>
										</li>
									)
								})}
							</ul>
						)}
					</>
				)}
			</Center>
		</Layout>
	)
}

export default UserOffers

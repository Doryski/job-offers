import OfferType from '../../types/OfferType';
import { HOST_PATH } from '../../helpers/utils';
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(HOST_PATH + '/api/offers', {
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	console.log(res)
	// if (res.status === 500) { return console.log(res) }
	const data = res.status === 200 ? await res.json() : 'Error'

	return {
		props: {
			offers: data,
		},
	}
}

const OfferList = ({ offers }) => {
	return (<div>{JSON.stringify(offers)}</div>
	)
}
// 'id','name','surname''email'
// <ul>{offers.map((offer: OfferType) => {
// 	return (
// 		<li>{JSON.stringify(offer, null, 2)}</li>
// 	)
// })}</ul>

export default OfferList

import getDomain from './getDomain'

export async function buyPayU() {
	const res = await fetch('https://secure.snd.payu.com/api/v2_1/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer d9a4536e-62ba-4f60-8017-6053211d3f47',
		},
		body: JSON.stringify({
			notifyUrl: getDomain() + '/notify', // url of notification page
			customerIp: '127.0.0.1', //
			merchantPosId: process.env.POS_ID, //
			description: 'RTV market', // description of shop?
			currencyCode: 'PLN',
			totalAmount: '50000', //
			buyer: {
				email: 'john.doe@example.com', // user.email
				name: 'John Doe', // user.name
			},
			products: [
				{
					name: 'Job offers Premium account',
					unitPrice: '10000',
					quantity: '1',
				},
			],
		}),
	})
	console.log(res)
	const data = await res.json()
	console.log(data)
}

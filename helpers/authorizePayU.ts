export default async function authorizePayU() {
	const res = await fetch(
		'https://secure.snd.payu.com/pl/standard/user/oauth/authorize',
		{
			method: 'POST',
			body:
				'grant_type=client_credentials&client_id=145227&client_secret=12f071174cb7eb79d4aac5bc2f07563f',
		}
	)
	console.log(res)
	const data = await res.json()
	console.log(data)
	return
}

export async function buyPayU() {
	const res = await fetch('https://secure.snd.payu.com/api/v2_1/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer d9a4536e-62ba-4f60-8017-6053211d3f47',
		},
		body: JSON.stringify({
			notifyUrl: 'https://your.eshop.com/notify', // url of notification page
			customerIp: '127.0.0.1', //
			merchantPosId: '300746', //
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

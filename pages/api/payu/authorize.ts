import { NextApiRequest, NextApiResponse } from 'next'

export default async function ApiUserData(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const request = new XMLHttpRequest()
	request.withCredentials = true
	request.open(
		'POST',
		'https://secure.snd.payu.com//pl/standard/user/oauth/authorize'
	)

	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	request.setRequestHeader('Access-Control-Allow-Origin', '*')
	request.setRequestHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, PUT, DELETE, OPTIONS'
	)
	request.setRequestHeader(
		'Access-Control-Allow-Headers',
		'Origin, Content-Type, X-Auth-Token'
	)
	request.onreadystatechange = function () {
		if (this.readyState === 4) {
			console.log('Status:', this.status)
			console.log('Headers:', this.getAllResponseHeaders())
			console.log('Body:', this.responseText)
		}
	}

	const body = `grant_type=client_credentials&
        client_id=${process.env.PAYU_CLIENT_ID}&
        client_secret=${process.env.PAYU_CLIENT_SECRET}
        `

	console.log('body', body)
	console.log(request.send(body))

	return request.send(body)
}

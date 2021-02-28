export type LoginResponseType = {
	id: string
	admin: boolean
	message?: string
}

export default async function login(
	url: string,
	data: { email: string; password: string }
) {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	const loginResponse: LoginResponseType = await res.json()

	return Promise.resolve<LoginResponseType>(loginResponse)
}

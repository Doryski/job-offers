export default async function postEmployer(url: string, data: any) {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	const { errorMessage }: { errorMessage: string } = await res.json()

	return new Promise<string>((resolve) => resolve(errorMessage))
}

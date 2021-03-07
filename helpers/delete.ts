export default async function del(apiUrl: string) {
	const res = await fetch(apiUrl, {
		method: 'DELETE',
	})
	return res.json()
}

export default async function del(apiUrl: string): Promise<any> {
	const res = await fetch(apiUrl, {
		method: 'DELETE',
	})
	return res.json()
}

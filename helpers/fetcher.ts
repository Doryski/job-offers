export default async function fetcher(
	url: RequestInfo,
	init: RequestInit
): Promise<any> {
	const res = await fetch(url, init)
	return res.json()
}

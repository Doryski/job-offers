export default async function fetcher(
	...args: [RequestInfo, RequestInit]
): Promise<any> {
	const res = await fetch(...args)
	return res.json()
}

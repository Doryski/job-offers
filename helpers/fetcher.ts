const fetcher = (url: RequestInfo, init: RequestInit) =>
	fetch(url, init).then((res) => res.json())
export default fetcher

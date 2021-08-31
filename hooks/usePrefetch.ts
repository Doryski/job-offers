import { NextRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default async function usePrefetch(
	url: string,
	router: NextRouter
): Promise<boolean> {
	const [isFetched, setIsFetched] = useState(false)
	const prefetch = useCallback(async () => {
		await router.prefetch(url)
		setIsFetched(true)
	}, [router, url])

	useEffect(() => {
		prefetch()

		return () => {
			setIsFetched(false)
		}
	}, [prefetch, router, url])

	return isFetched
}

import { NextRouter } from 'next/router'
import { useEffect } from 'react'

export default function usePrefetch(url: string, router: NextRouter): void {
	useEffect(() => {
		router.prefetch(url)
	}, [])
}

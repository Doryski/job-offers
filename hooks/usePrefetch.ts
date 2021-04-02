import { NextRouter } from 'next/router'
import { useEffect } from 'react'

export default function usePrefetch(url: string, router: NextRouter) {
	useEffect(() => {
		router.prefetch(url)
	}, [])
}

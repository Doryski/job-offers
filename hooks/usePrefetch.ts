import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function usePrefetch(url: string) {
	const router = useRouter()
	useEffect(() => {
		router.prefetch(url)
	}, [])
}

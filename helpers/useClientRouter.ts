import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function useClientRouter() {
	let router: NextRouter
	useEffect(() => {
		router = useRouter()
	}, [])
	return router
}

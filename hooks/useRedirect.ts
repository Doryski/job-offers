import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
type Options = {
	/**
	 * Defaults to '/'
	 */
	redirectUrl?: string
	prefetch?: boolean
}

export default function useRedirect(
	seconds: number,
	router: NextRouter,
	options: Options = { redirectUrl: '/', prefetch: false }
) {
	const { redirectUrl, prefetch } = options
	const [countdown, setCountdown] = useState(seconds)
	const [isRedirecting, setIsRedirecting] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setCountdown((prev) => prev - 1)
		}, 1000)
		if (countdown <= 0) {
			setIsRedirecting(true)
			router.push(redirectUrl)
			return () => setIsRedirecting(false)
		}
	}, [countdown])
	useEffect(() => {
		if (prefetch) {
			router.prefetch(redirectUrl)
		}
	}, [])
	return { isRedirecting, countdown }
}
import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import usePrefetch from './usePrefetch'
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
	options: Options
) {
	const { redirectUrl, prefetch } = {
		redirectUrl: '/',
		prefetch: false,
		...options,
	}
	const [countdown, setCountdown] = useState(seconds)
	const [isRedirecting, setIsRedirecting] = useState(false)
	if (prefetch) {
		usePrefetch(redirectUrl, router)
	}

	useEffect(() => {
		setTimeout(() => {
			setCountdown(prev => prev - 1)
		}, 1000)
		if (countdown <= 0) {
			setIsRedirecting(true)
			router.push(redirectUrl)
		}
	}, [countdown])

	return { isRedirecting, countdown }
}

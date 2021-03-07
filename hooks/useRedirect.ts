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
	const opts = { redirectUrl: '/', prefetch: false, ...options }
	const { redirectUrl, prefetch } = opts
	const [countdown, setCountdown] = useState(seconds)
	const [isRedirecting, setIsRedirecting] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setCountdown((prev) => prev - 1)
		}, 1000)
		if (countdown <= 0) {
			setIsRedirecting(true)
			router.push(redirectUrl)
		}
	}, [countdown])
	if (prefetch) {
		usePrefetch(redirectUrl)
	}
	return { isRedirecting, countdown }
}

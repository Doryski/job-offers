import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useRedirect(
	router: NextRouter,
	seconds: number,
	redirectUrl: string = '/'
) {
	const [countdown, setCountdown] = useState(seconds)
	const [isRedirecting, setIsRedirecting] = useState(false)

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

import { useState, useEffect } from 'react'

export default function useDeviceDetect(windowWidth: number) {
	let isM
	if (typeof window !== 'undefined') {
		const getWindowWidth = () =>
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		const isMobileWidth = () => getWindowWidth() <= windowWidth

		const [isMobile, setIsMobile] = useState(() => isMobileWidth())
		useEffect(() => {
			const resizeListener = () => setIsMobile(() => isMobileWidth())

			window.addEventListener('resize', resizeListener)

			return () => {
				window.removeEventListener('resize', resizeListener)
			}
		}, [])
		isM = isMobile
		return
	}
	return null
}

import { isClient } from '@/helpers/utils'
import { useState, useEffect, useRef } from 'react'
import useWindowSize from './useWindowSize'

/**
 *
 * @param mobileBreakpoint defaults to 760
 * @param desktopBreakpoint defaults to 900
 */
export default function useDeviceDetect(
	mobileBreakpoint: number = 760,
	desktopBreakpoint: number = 900
) {
	const { width } = useWindowSize()
	const isMobileWidth = width <= mobileBreakpoint
	const isDesktopWidth = width >= desktopBreakpoint

	const [isMobile, setIsMobile] = useState(isMobileWidth)
	const [isDesktop, setIsDesktop] = useState(isDesktopWidth)
	const resizeListener = useRef(() => {})

	resizeListener.current = () => {
		if (isClient) {
			setIsMobile(isMobileWidth)
			setIsDesktop(isDesktopWidth)
		}
	}
	useEffect(() => {
		window.addEventListener('resize', resizeListener.current)

		return () => {
			window.removeEventListener('resize', resizeListener.current)
		}
	})
	return { isMobile, isDesktop, isTablet: !isMobile && !isDesktop }
}

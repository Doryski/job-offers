import { useEffect, useState } from 'react'
import { isClient } from '@/helpers/utils'

type NumOrFalse = number | false

type WindowSizeType = {
	width: NumOrFalse
	height: NumOrFalse
}

export default function useWindowSize(): WindowSizeType {
	const [windowSize, setWindowSize] = useState({
		width: isClient && window.innerWidth,
		height: isClient && window.innerHeight,
	})

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight })
	}

	useEffect(() => {
		window.addEventListener('resize', changeWindowSize)

		return () => {
			window.removeEventListener('resize', changeWindowSize)
		}
	}, [])

	return windowSize
}

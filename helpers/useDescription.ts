import { useEffect } from 'react'

export default function useDescription(
	ref: React.RefObject<any>,
	innerHTML: string
) {
	useEffect(() => {
		ref.current.innerHTML = innerHTML
	}, [innerHTML])
}

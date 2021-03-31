import { useState } from 'react'

export default function useTechSize(initial: number = 1) {
	const [techSize, setTechSize] = useState(initial)
	const handleTechSize = {
		add: () => setTechSize(prevTechSize => prevTechSize + 1),
		remove: () => setTechSize(prevTechSize => prevTechSize - 1),
	}
	return { techSize, handleTechSize }
}

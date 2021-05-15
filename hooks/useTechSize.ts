import { useState } from 'react'

export default function useTechSize(
	initial: number = 1
): [number, { [key: string]: () => void }] {
	const [techSize, setTechSize] = useState<number>(initial)
	const handleTechSize = {
		add: () => setTechSize(prevTechSize => prevTechSize + 1),
		remove: () => setTechSize(prevTechSize => prevTechSize - 1),
	}
	return [techSize, handleTechSize]
}

import { useState } from 'react'

type UseBooleanStateReturnType = [boolean, () => void, () => void, () => void]

export default function useBooleanState(
	initialState: boolean
): UseBooleanStateReturnType {
	const [isTrue, setIsTrue] = useState<boolean>(initialState)

	return [
		isTrue,
		() => setIsTrue(true),
		() => setIsTrue(false),
		() => setIsTrue(prev => !prev),
	]
}

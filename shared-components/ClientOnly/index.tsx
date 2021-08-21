import { useEffect, useState } from 'react'
import { ChildrenProp } from 'types/childrenProp'

// Wrapper for components that should appear only on client side
const ClientOnly = ({ children }: ChildrenProp) => {
	const [hasMounted, setHasMounted] = useState(false)
	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null

	return children
}

export default ClientOnly

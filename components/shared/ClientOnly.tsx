import { useEffect, useState } from 'react'

// Wrapper for components that should appear only on client side
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
	const [hasMounted, setHasMounted] = useState(false)
	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null

	return <>{children}</>
}

export default ClientOnly

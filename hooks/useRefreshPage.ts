import { NextRouter } from 'next/router'
import { useEffect } from 'react'
import useBooleanState from './useBooleanState'

export default function useRefreshPage(data: any, router: NextRouter) {
	const [isRefreshing, refreshStart, refreshStop] = useBooleanState(false)

	const refresh = () => {
		router.replace(router.asPath)
		refreshStart()
	}

	useEffect(() => {
		refreshStop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	return { isRefreshing, refresh }
}

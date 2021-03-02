import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import devlog from '../helpers/devlog'

export default function useRefreshPage(data: any, router: NextRouter) {
	const [isRefreshing, setIsRefreshing] = useState(false)

	const refresh = () => {
		router.replace(router.asPath)
		devlog('refreshing page')
		setIsRefreshing(true)
	}

	useEffect(() => {
		setIsRefreshing(false)
	}, [data])

	return { isRefreshing, refresh }
}
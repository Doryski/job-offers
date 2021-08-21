import { useEffect } from 'react'
import { NextRouter } from 'next/router'
import useSWR from 'swr'

type UseUserProps = {
	redirectTo: string
	redirectIfFound: string | false
	userApi: string
	router: NextRouter
}

export default function useUser({
	redirectTo = '/',
	redirectIfFound = false,
	userApi,
	router,
}: UseUserProps) {
	const { data: user, mutate: mutateUser } = useSWR(userApi)

	useEffect(() => {
		if (!redirectTo || !user) return
		if (
			(redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
			(redirectIfFound && user?.isLoggedIn)
		) {
			router.push(redirectTo)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, redirectIfFound, redirectTo])

	return { user, mutateUser }
}

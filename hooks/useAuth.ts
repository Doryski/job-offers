import { useEffect } from 'react'
import { NextRouter } from 'next/router'
import useSWR from 'swr'

export default function useUser({
	redirectTo = '/',
	redirectIfFound = false,
	userApi,
	router,
}: {
	redirectTo: string
	redirectIfFound: string | false
	userApi: string
	router: NextRouter
}) {
	const { data: user, mutate: mutateUser } = useSWR(userApi)

	useEffect(() => {
		// if no redirect needed, just return (example: already on /dashboard)
		// if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
		if (!redirectTo || !user) return

		if (
			// If redirectTo is set, redirect if the user was not found.
			(redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
			// If redirectIfFound is also set, redirect if the user was found
			(redirectIfFound && user?.isLoggedIn)
		) {
			router.push(redirectTo)
		}
	}, [user, redirectIfFound, redirectTo])

	return { user, mutateUser }
}

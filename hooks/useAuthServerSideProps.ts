import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'
import { options as authOptions } from '@/pages/api/auth/[...nextauth]'
import { Session } from 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncReturnType<T extends (...args: any) => any> = T extends (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	...args: any
) => Promise<infer U>
	? U
	: // eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends (...args: any) => infer U
	? U
	: // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  any

export type InferWithAuthServerSideProps<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends (...args: any) => Promise<{ props: any }>
> = AsyncReturnType<T>['props']

type WithAuthServerSidePropsOptions = {
	authenticatedPage?: boolean
}

export type AuthenticatedPageProps = {
	session: Session
}

type EmptyProps = {
	props: Record<string, unknown>
}

type DefaultWithAuthServerSideProps = {
	session: Session | null
}

export const withAuthServerSideProps = <T extends EmptyProps = EmptyProps>(
	getServerSidePropsFunc?: (
		ctx: GetServerSidePropsContext,
		session: Session | null | undefined
	) => Promise<T>,
	options: WithAuthServerSidePropsOptions = {}
) => {
	return async function getMergedServerSideProps(
		ctx: GetServerSidePropsContext
	): Promise<{ props: T['props'] & DefaultWithAuthServerSideProps }> {
		console.log('trying to get the session')
		let userSession: Session | null
		try {
			userSession = await getSession(ctx)
		} catch {
			userSession = null
		}
		console.log('retrieved session: ', userSession)

		if (options.authenticatedPage && !userSession) {
			return ({
				redirect: {
					destination: authOptions.pages.signOut,
					permanent: false,
				},
				// We have to trick the TS compiler here.
			} as unknown) as { props: T['props'] & DefaultWithAuthServerSideProps }
		}

		if (getServerSidePropsFunc) {
			return {
				props: {
					session: userSession,
					...((await getServerSidePropsFunc(ctx, userSession)).props || {}),
				},
			}
		}

		return {
			props: {
				session: userSession,
			},
		}
	}
}

import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { User, Session } from 'next-auth'
import Providers from 'next-auth/providers'
import getDomain from 'utils/getDomain'
import post from 'utils/post'
import { Credentials } from '@/types'
import { JWT } from 'next-auth/jwt'

export const options = {
	providers: [
		Providers.Credentials({
			name: 'Sign in',
			credentials: {},
			// eslint-disable-next-line consistent-return
			authorize: async (credentials: Credentials) => {
				console.log('credentials:', credentials)
				const { email, password } = credentials
				console.log(`${getDomain()}/api/auth/verification`)
				try {
					const user = await post(`${getDomain()}/api/auth/verification`, {
						email,
						password,
					})

					console.log('user checked: ', user)
					if (user.id) return await Promise.resolve({ ...user, email })
				} catch (err) {
					console.error(err)
					return new Error()
				}
			},
		}),
	],
	session: {
		jwt: true,
		maxAge: 60 * 60, // In seconds
	},
	callbacks: {
		signIn: async (user: User) => {
			if (user.id) return true
			console.warn('user does not exist')
			return '/auth/login'
		},
		session: async (session: Session, token: JWT) => {
			const encodedToken = sign(token, process.env.JWT_SECRET as string)
			session.accessToken = encodedToken
			session.user!.admin = token?.admin as boolean
			session.user!.id = token?.userId as string
			session.user!.email = token?.email as string

			return Promise.resolve(session)
		},
		jwt: async (token: JWT, user: User) => {
			if (user) {
				token.accessToken = user.token
				token.admin = user.admin
				token.userId = user.id
				token.email = user.email
			}

			return Promise.resolve(token)
		},
	},
	pages: {
		signIn: '/auth/login',
		signOut: '/',
		newUser: '/',
		error: '/auth/login',
	},
	secret: process.env.JWT_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
}
export default (req: NextApiRequest, res: NextApiResponse) =>
	NextAuth(req, res, options)

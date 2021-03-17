import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import getDomain from '@/helpers/getDomain'
import post from '@/helpers/post'

export const options = {
	providers: [
		Providers.Credentials({
			name: 'Sign in',
			credentials: {},
			authorize: async (credentials) => {
				console.log('credentials:', credentials)
				const { email, password } = credentials
				console.log(getDomain() + '/api/auth/verification')
				try {
					const user = await post(getDomain() + '/api/auth/verification', {
						email,
						password,
					})

					console.log('user checked: ', user)
					if (user.id) return Promise.resolve({ ...user, email })
				} catch (err) {
					console.log(err)
					throw new Error()
				}
			},
		}),
	],
	session: {
		jwt: true,
		maxAge: 60 * 60, // In seconds
	},
	callbacks: {
		signIn: async (user, account, profile) => {
			if (user.id) return true
			console.log('user does not exist')
			return '/auth/login'
		},
		session: async (session, token) => {
			const encodedToken = sign(token, process.env.JWT_SECRET)
			session.accessToken = encodedToken
			session.user.admin = token.admin
			session.user.id = token.userId
			session.user.email = token.email

			return Promise.resolve(session)
		},
		jwt: async (token, user) => {
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
	// @ts-ignore
	NextAuth(req, res, options)

import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import { Session } from 'next-auth/client'
import Providers from 'next-auth/providers'
import login from '../../../helpers/login'
import { DOMAIN } from '../../../helpers/utils'

const options = {
	providers: [
		Providers.Credentials({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Sign in',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'email@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				console.log('credentials:', credentials)
				const { email, password } = credentials
				console.log(DOMAIN + '/api/auth/verification')
				try {
					// API call associated with authentification
					// look up the user from the credentials supplied
					const user = await login(DOMAIN + '/api/auth/verification', {
						email,
						password,
					})
					// Any object returned will be saved in `user` property of the JWT
					if (user.id) return Promise.resolve({ ...user, email })
				} catch (err) {
					console.log(err)
					// Redirecting to the login page with error messsage in the URL
					throw '/auth/login'
				}
			},
		}),
	],
	site: DOMAIN,
	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		// This option can be used with or without a database for users/accounts.
		// Note: `jwt` is automatically set to `true` if no database is specified.
		jwt: true,

		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 60 * 60, // 1 hr

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
	},
	callbacks: {
		signIn: async (user, account, profile) => {
			// console.log('SIGNIN Callback: ')
			// console.log('user', user)
			// console.log('account', account)
			// console.log('profile', profile)
			if (user.id) return true
			console.log('user does not exist')
			return '/auth/login'
		},
		// redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
		redirect: async (url, baseUrl) => {
			return url.startsWith(baseUrl) ? url : baseUrl
		},
		// session: async (session, user) => { return Promise.resolve(session) },
		session: async (session, token) => {
			const encodedToken = sign(token, process.env.JWT_SECRET)
			session.accessToken = encodedToken
			session.user.admin = token.admin
			session.user.id = token.userId
			session.user.email = token.email

			// console.log('encoded JWT:', encodedToken)
			// console.log('SESSION Callback:')
			// console.log('token', token)
			// console.log('session', session)

			// return session
			return Promise.resolve(session)
		},
		// jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) },
		jwt: async (token, user) => {
			if (user) {
				token.accessToken = user.token
				token.admin = user.admin
				token.userId = user.id
				token.email = user.email
			}

			// console.log('JWT Callback:')
			// console.log('user', user)
			// console.log('token', token)

			// return token
			return Promise.resolve(token)
		},
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/user/profile',
		error: '/auth/login',
	},
	jwt: {
		secret: process.env.JWT_SECRET,
	},
}
export default (req: NextApiRequest, res: NextApiResponse) =>
	// @ts-ignore
	NextAuth(req, res, options)

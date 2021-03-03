import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import getDomain from '../../../helpers/getDomain'
import login from '../../../helpers/login'

export const options = {
	providers: [
		Providers.Credentials({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Sign in',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				// email: {
				// 	label: 'Email',
				// 	type: 'text',
				// 	placeholder: 'email@example.com',
				// },
				// password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				console.log('credentials:', credentials)
				const { email, password } = credentials
				console.log(getDomain() + '/api/auth/verification')
				try {
					// API call associated with authentification
					// look up the user from the credentials supplied
					const user = await login(getDomain() + '/api/auth/verification', {
						email,
						password,
					})
					console.log('user checked: ', user)
					// Any object returned will be saved in `user` property of the JWT
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
			// console.log('SIGNIN Callback: ')
			// console.log('user', user)
			// console.log('account', account)
			// console.log('profile', profile)
			if (user.id) return true
			console.log('user does not exist')
			return '/auth/login'
		},
		// redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
		// redirect: async (url, baseUrl) => {
		// 	console.log('REDIRECT Callback: ')
		// 	console.log('url', url)
		// 	console.log('baseUrl', baseUrl)

		// 	return url.startsWith(baseUrl) ? url : baseUrl
		// },
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

			return Promise.resolve(token)
		},
	},
	pages: {
		signIn: '/auth/login',
		newUser: '/',
		error: '/auth/login',
	},
	secret: process.env.JWT_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
		// encryption: true,
	},
}
export default (req: NextApiRequest, res: NextApiResponse) =>
	// @ts-ignore
	NextAuth(req, res, options)

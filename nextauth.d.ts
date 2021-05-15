import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
	export interface User extends User {
		id: string
		admin: boolean
		email: string
		token: string
	}
	export interface Session extends DefaultSession {
		user?: User
		expires?: string
	}
}
declare module 'next-auth/jwt' {
	export interface JWT extends DefaultJWT {
		userId?: User['id']
		admin?: User['admin']
		email?: User['email']
	}
}

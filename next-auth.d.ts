import 'next-auth'

declare module 'next-auth' {
	export interface User {
		id: string
		admin: boolean
		email: string
	}
}

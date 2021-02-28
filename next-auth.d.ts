import 'next-auth'

declare module 'next-auth' {
	export interface User extends User {
		id: string
		admin: boolean
	}
}

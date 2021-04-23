export default function getDomain(): string {
	return process.env.NODE_ENV === 'production'
		? process.env.NEXT_PUBLIC_VERCEL_URL
		: process.env.NEXTAUTH_URL
}

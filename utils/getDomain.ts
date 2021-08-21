const getDomain = (): string =>
	(process.env.NODE_ENV as string) === 'production'
		? (process.env.NEXT_PUBLIC_VERCEL_URL as string)
		: (process.env.NEXTAUTH_URL as string)

export default getDomain

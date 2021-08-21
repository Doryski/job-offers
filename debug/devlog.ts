export default function devlog(...args: any[]): void {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-restricted-syntax
		console.log(...args)
	}
}

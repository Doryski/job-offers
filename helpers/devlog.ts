export default function devlog(...args: any) {
	if (process.env.NODE_ENV !== 'development') return
	return console.log(...args)
}

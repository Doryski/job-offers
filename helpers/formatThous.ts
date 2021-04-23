export default function formatThous(
	number: number,
	separator: string = ' ',
	step: number = 3
): string {
	const regex = new RegExp(`\\B(?=(\\d{${step}})+(?!\\d))`, 'g')
	if (!number) return
	return number.toString().replace(regex, separator)
}

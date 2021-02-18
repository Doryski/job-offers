import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultTheme {
		colors: {
			text: string
			title: string
			primary: string
			secondary: string
			divider: string
			pink: string
			lightPink: string
			opacityPink: string
			buttonBackground: string
			buttonBackgroundHover: string
			buttonBackgroundActive: string
			buttonBorder: string
			salary: string
			span: string
			white: string
			shadow: string
		}
		techColors: {
			disabled: string
			all: string
			js: string
			html: string
			php: string
			ruby: string
			python: string
			java: string
			net: string
			scala: string
			c: string
			mobile: string
			testing: string
			devops: string
			ux: string
			pm: string
			game: string
			analytics: string
			security: string
			data: string
			go: string
			sap: string
			support: string
			other: string
		}
		shadows: {
			card: string
			cardHover: string
		}
		breakpoints: {
			xs: string
			sm: string
			md: string
		}
		fontSize: {
			xl: string
			large: string
			md: string
			sm: string
			small: string
			xs: string
		}
		fontWeight: {
			700: string
			600: string
			500: string
			400: string
			300: string
		}
	}
}

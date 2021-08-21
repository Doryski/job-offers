const theme = {
	techColors: {
		disabled: 'hsl(233, 20%, 57%)',
		all: 'linear-gradient(-90deg, hsl(291, 47%, 60%), hsl(291, 64%, 42%))',
		js: 'linear-gradient(-90deg, hsl(47, 100%, 51%), hsl(41, 100%, 50%))',
		html: 'linear-gradient(-90deg, hsl(15, 100%, 66%), hsl(16, 98%, 56%))',
		php: 'linear-gradient(-90deg, hsl(205, 95%, 62%), hsl(213, 97%, 54%))',
		ruby: 'linear-gradient(-90deg, hsl(1, 83%, 63%), hsl(4, 90%, 58%))',
		python: 'linear-gradient(-90deg, hsl(215, 71%, 42%), hsl(207, 73%, 45%))',
		java: 'linear-gradient(-90deg, hsl(358, 94%, 69%), hsl(348, 93%, 66%))',
		net: 'linear-gradient(-90deg, hsl(291, 51%, 30%), hsl(292, 40%, 46%))',
		scala: 'linear-gradient(-90deg, hsl(358, 91%, 68%), hsl(358, 86%, 61%))',
		c: 'linear-gradient(-90deg, hsl(173, 63%, 50%), hsl(157, 71%, 54%))',
		mobile: 'linear-gradient(-90deg, hsl(337, 70%, 59%),hsl(324, 45%, 51%))',
		testing:
			'linear-gradient(-90deg, hsl(174, 100%, 29%hsl(173, 100%, 24%)07))',
		devops: 'linear-gradient(-90deg, hsl(232, 70%, 60%), hsl(253, 66%, 64%))',
		ux: 'linear-gradient(-90deg, hsl(36, 100%, 65%), hsl(36, 100%, 50%))',
		pm: 'linear-gradient(-90deg, hsl(174, 42%, 65%), hsl(174, 42%, 51%))',
		game: 'linear-gradient(-90deg, hsl(340, 100%, 63%), hsl(340, 82%, 59%))',
		analytics:
			'linear-gradient(-90deg, hsl(221, 44%, 41%), hsl(221, 44%, 61%))',
		security: 'linear-gradient(-90deg, hsl(231, 99%, 66%), hsl(216, 85%, 34%))',
		data: 'linear-gradient(-90deg, hsl(96, 65%, 59%), hsl(96, 54%, 45%))',
		go: 'linear-gradient(-90deg, hsl(187, 70%, 66%), hsl(224, 70%, 66%))',
		sap: 'linear-gradient(-90deg, hsl(195, 98%, 46%), hsl(212, 76%, 43%))',
		support: 'linear-gradient(-90deg, hsl(295, 64%, 64%), hsl(242, 71%, 59%))',
		other: 'linear-gradient(-90deg, hsl(320, 81%, 61%), hsl(300, 62%, 56%))',
	},
	shadows: {
		card:
			'hsla(0, 0%, 0%, 0.05) 0px 2px 2px 0px, hsla(0, 0%, 0%, 0.04) 0px 1px 5px 0px',
		cardHover:
			'hsla(0, 0%, 0%, 0.07) 0px 4px 4px 0px, hsla(0, 0%, 0%, 0.06) 0px 3px 7px 0px',
	},
	breakpoints: {
		xs: '360px',
		sm: '500px',
		md: '800px',
	},
	fontSize: {
		xxl: '1.5rem',
		xl: '1.2rem',
		large: '1rem',
		md: '.875rem',
		sm: '.75rem',
		small: '.7rem',
		xs: '.6875rem',
	},
	fontWeight: {
		700: '700',
		600: '600',
		500: '500',
		400: '400',
		300: '300',
	},
}
const lightModeProps = {
	colors: {
		text: 'hsl(0, 0%, 47%)',
		title: 'hsl(200, 18%, 26%)',
		primary: 'hsl(231, 48%, 48%)',
		dark: 'hsl(204, 26%, 96%)',
		divider: 'hsl(219, 37%, 93%)',
		primaryLight: 'hsl(233, 82%, 76%)',
		primaryOpacity: 'hsl(231, 62%, 65%)',
		buttonBackground: 'hsl(0, 0%, 100%)',
		buttonBackgroundHover: 'hsl(0, 0%, 96%)',
		buttonBackgroundActive: 'hsla(241, 100%, 63%, 0.08)',
		buttonBorder: 'hsl(220, 29%, 92%)',
		salary: 'hsl(148, 74%, 45%)',
		span: 'hsl(213, 10%, 64%)',
		white: 'hsl(0, 0%, 100%)',
		admin: 'hsl(0, 45%, 11%)',
		shadow:
			'hsla(0, 0%, 0%, 0.05) 0px 2px 2px 0px, hsla(0, 0%, 0%, 0.04) 0px 1px 5px 0px',
		error: 'hsl(0, 100%, 50%)',
	},
}

const darkModeProps = {
	colors: {
		text: 'hsla(0, 0%, 100%, 0.8)',
		title: 'hsla(0, 0%, 100%, 0.8)',
		dark: 'hsl(0, 0%, 17%)',
		darker: 'hsl(0, 0%, 13%)',
		divider: 'hsla(0, 0%, 0%, 0.12)',
		primary: 'hsl(339, 100%, 70%)',
		primaryLight: 'hsl(340, 82%, 76%)',
		primaryOpacity: 'hsla(340, 83%, 66%, 0.05)',
		buttonBackground: 'hsl(0, 0%, 22%)',
		buttonBackgroundHover: 'hsla(0, 0%, 0%, 0.04)',
		buttonBackgroundActive: 'hsla(340, 83%, 66%, 0.05)',
		buttonBorder: 'hsl(0, 0%, 22%)',
		salary: 'hsl(148, 74%, 45%)',
		span: 'hsl(213, 10%, 64%)',
		white: 'hsl(0, 0%, 100%)',
		admin: 'hsl(0, 45%, 11%)',
		shadow: 'hsla(0, 0%, 4%, 0.1) 0px 2px 18px 10px',
	},
}

const darkMode = { ...theme, ...darkModeProps }
const lightMode = { ...theme, ...lightModeProps }

export type ThemeType = typeof theme & typeof lightMode
export { darkMode, lightMode }
export default theme

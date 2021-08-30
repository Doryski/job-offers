import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { DefaultTheme } from 'styled-components'
import { Typography, TypographyProps } from '../Typography'
import { Button, IconWrapper } from './styled'

type IconProps = {
	icon?: JSX.Element
	color?: keyof DefaultTheme['colors']
	margin?: CSSProperties['margin']
	display?: CSSProperties['display']
}

type CustomButtonProps = {
	children?: React.ReactNode
	active?: boolean
	fontSize?: keyof DefaultTheme['fontSize']
	handleClick?: VoidFunction
	padding?: CSSProperties['padding']
	margin?: CSSProperties['margin']
	primary?: boolean
	fWeight?: keyof DefaultTheme['fontWeight']
	minWidth?: CSSProperties['minWidth']
	display?: CSSProperties['display']
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	icon?: IconProps | false
	hoverColor?: keyof DefaultTheme['colors']
	bordered?: boolean
	round?: boolean
	height?: CSSProperties['height']
}

const CustomButton = ({
	children,
	active,
	fontSize,
	icon,
	handleClick,
	padding,
	margin,
	primary,
	fWeight,
	minWidth,
	display,
	type,
	hoverColor,
	bordered,
	round,
	height,
}: CustomButtonProps) => {
	const buttonProps = {
		onClick: handleClick,
		icon: !!icon,
		active,
		padding,
		margin,
		primary,
		minWidth,
		bordered,
		round,
		type,
		height,
	}

	const typographyProps: TypographyProps = {
		color: (active && 'primary') || (primary ? 'white' : 'text'),
		fontSize,
		fWeight,
		display,
		hoverColor,
	}

	return (
		<Button {...buttonProps}>
			{!!children && <Typography {...typographyProps}>{children}</Typography>}
			{icon && <IconWrapper {...icon}>{icon?.icon}</IconWrapper>}
		</Button>
	)
}

CustomButton.defaultProps = {
	children: null,
	active: false,
	icon: false,
	handleClick: () => {},
	primary: false,
	type: 'button',
	fontSize: undefined,
	padding: undefined,
	margin: undefined,
	fWeight: undefined,
	minWidth: undefined,
	display: undefined,
	hoverColor: undefined,
	bordered: true,
	round: false,
	height: undefined,
}

export default CustomButton

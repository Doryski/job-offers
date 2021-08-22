import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { DefaultTheme } from 'styled-components'
import { ChildrenProp } from 'types/childrenProp'
import { Typography } from '../Typography'
import { Button, IconWrapper } from './styled'

type CustomButtonProps = {
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
	icon?:
		| {
				icon?: JSX.Element
				color?: keyof DefaultTheme['colors']
				margin?: CSSProperties['margin']
		  }
		| false
	hoverColor?: keyof DefaultTheme['colors']
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
}: CustomButtonProps & ChildrenProp) => (
	<Button
		active={active}
		onClick={handleClick}
		padding={padding}
		margin={margin}
		primary={primary}
		icon={!!icon}
		minWidth={minWidth}
		type={type}>
		<Typography
			color={(active && 'primary') || (primary ? 'white' : 'text')}
			fontSize={fontSize}
			fWeight={fWeight}
			display={display}
			hoverColor={hoverColor}>
			{children}
		</Typography>
		{icon && (
			<IconWrapper color={icon?.color} margin={icon?.margin}>
				{icon?.icon}
			</IconWrapper>
		)}
	</Button>
)

CustomButton.defaultProps = {
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
}

export default CustomButton

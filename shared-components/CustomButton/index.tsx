import { DefaultTheme } from 'styled-components'
import { Typography } from '../Typography'
import { Button, IconWrapper } from './styled'

type CustomButtonProps = {
	children: React.ReactNode
	active?: boolean
	fontSize?: keyof DefaultTheme['fontSize']
	handleClick?: VoidFunction
	padding?: string
	margin?: string
	primary?: boolean
	fWeight?: keyof DefaultTheme['fontWeight']
	minWidth?: string
	display?: string
	type?: 'button' | 'submit' | 'reset'
	icon?:
		| {
				icon?: JSX.Element
				color?: keyof DefaultTheme['colors']
				margin?: string
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
}: CustomButtonProps) => (
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
			color={active ? 'primary' : primary ? 'white' : 'text'}
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

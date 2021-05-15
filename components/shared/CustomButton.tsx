import styled, { DefaultTheme } from 'styled-components'
import Typography from './Typography'

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

type StyledButtonProps = {
	primary?: boolean
	active?: boolean
	padding?: string
	margin?: string
	minWidth?: string
	icon?: boolean
}

export const Button = styled.button<StyledButtonProps>`
	border: 1px solid
		${({ theme, active, primary }) =>
			active || primary ? theme.colors.primary : theme.colors.buttonBorder};
	border-radius: 5px;
	padding: ${({ padding, icon }) =>
		icon
			? padding || '0.125em 0.5em 0.125em 0.75em'
			: padding || '0.125em 0.75em'};
	margin: ${({ margin }) => margin || '0'};
	background: ${({ theme, active, primary }) =>
		active
			? theme.colors.buttonBackgroundActive
			: primary
			? theme.colors.primary
			: theme.colors.buttonBackground};
	display: flex;
	align-items: center;
	justify-content: ${({ icon }) => (icon ? 'space-between' : 'center')};
	width: ${({ minWidth }) => minWidth || 'auto'};
	min-width: ${({ minWidth }) => minWidth || 'none'};
	transition: all 0.4s;
	&:hover {
		background: ${({ theme, primary }) =>
			primary
				? theme.colors.primaryOpacity
				: theme.colors.buttonBackgroundHover};
		border-color: ${({ theme, primary }) =>
			primary ? theme.colors.primaryOpacity : theme.colors.buttonBorder};
	}
`
export const IconWrapper = styled.div<{
	color?: keyof DefaultTheme['colors']
	margin?: string
}>`
	margin: ${({ margin }) => margin || 'unset'};
	transition: all 0.4s;
	color: ${({ color, theme }) => theme.colors[color!] || 'inherit'};
`

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

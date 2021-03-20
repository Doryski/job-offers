import styled from 'styled-components'
import Typography from './Typography'

type CustomButtonProps = {
	children: React.ReactNode
	active?: boolean
	fontSize?: string
	handleClick?: VoidFunction
	padding?: string
	margin?: string
	primary?: boolean
	fWeight?: number
	minWidth?: string
	display?: string
	type?: 'button' | 'submit' | 'reset'
	icon?: { icon?: JSX.Element; color?: string; margin?: string } | false
	hoverColor?: string
}

type StyledButtonProps = {
	primary?: boolean
	active?: boolean
	padding?: string
	margin?: string
	minWidth?: string
	icon?: boolean
}

const CustomButton = ({
	children,
	active,
	fontSize,
	icon = false,
	handleClick,
	padding,
	margin,
	primary = false,
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
export const IconWrapper = styled.div<{ color?: string; margin?: string }>`
	margin: ${({ margin }) => margin || 'unset'};
	transition: all 0.4s;
	color: ${({ color, theme }) => theme.colors[color] || 'inherit'};
`

export default CustomButton

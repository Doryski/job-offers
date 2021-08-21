import styled, { DefaultTheme } from 'styled-components'

type StyledButtonProps = {
	primary?: boolean
	active?: boolean
	padding?: string
	margin?: string
	minWidth?: string
	icon?: boolean
}

const Button = styled.button<StyledButtonProps>`
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
		(active && theme.colors.buttonBackgroundActive) ||
		(primary ? theme.colors.primary : theme.colors.buttonBackground)};
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
const IconWrapper = styled.div<{
	color?: keyof DefaultTheme['colors']
	margin?: string
}>`
	margin: ${({ margin }) => margin || 'unset'};
	transition: all 0.4s;
	color: ${({ color, theme }) => theme.colors[color!] || 'inherit'};
`
export { Button, IconWrapper }

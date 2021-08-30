import { CSSProperties } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'

type StyledButtonProps = {
	primary?: boolean
	active?: boolean
	padding?: CSSProperties['padding']
	margin?: CSSProperties['margin']
	minWidth?: CSSProperties['minWidth']
	icon?: boolean
	bordered?: boolean
	round?: boolean
	height: CSSProperties['height']
}

const Button = styled.button<StyledButtonProps>`
	border: 1px solid
		${({ theme, active, primary }) =>
			active || primary ? theme.colors.primary : theme.colors.buttonBorder};
	border-radius: ${({ round }) => (round ? '999px' : '5px')};
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
	height: ${({ height }) => height || 'auto'};
	width: ${({ minWidth }) => minWidth || 'auto'};
	min-width: ${({ minWidth }) => minWidth || 'none'};
	transition: all 0.4s;
	${({ bordered }) =>
		!bordered &&
		css`
			border: none;
		`}
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
	margin?: CSSProperties['margin']
	display?: CSSProperties['display']
}>`
	display: ${({ display }) => display || 'initial'};
	margin: ${({ margin }) => margin || 'unset'};
	transition: all 0.4s;
	color: ${({ color, theme }) => theme.colors[color!] || 'inherit'};
`
export { Button, IconWrapper }

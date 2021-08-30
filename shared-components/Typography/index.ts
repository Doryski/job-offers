import { CSSProperties } from 'react'
import styled, { css, DefaultTheme } from 'styled-components'

type TypographyProps = {
	display?: CSSProperties['display']
	fWeight?: keyof DefaultTheme['fontWeight']
	family?: CSSProperties['fontFamily']
	fontSize?: keyof DefaultTheme['fontSize']
	hide?: boolean
	color?: keyof DefaultTheme['colors']
	hoverColor?: CSSProperties['color']
	align?: CSSProperties['textAlign']
	margin?: CSSProperties['margin']
	padding?: CSSProperties['padding']
	minWidth?: CSSProperties['minWidth']
	nowrap?: boolean
}

const Wrapper = styled.div<TypographyProps>`
	${({ display, margin, align, padding, minWidth }) => css`
		display: ${display || 'block'};
		align-items: ${display === 'flex' ? 'center' : 'initial'};
		margin: ${margin || '0'};
		text-align: ${align || 'center'};
		padding: ${padding || '0'};

		${minWidth && `min-width: ${minWidth}`};
	`}
`
const Typography = styled(Wrapper).attrs(({ as }: { as: string }) => ({
	as: as || 'span',
}))`
	${({ fWeight, family, fontSize, hide, color, hoverColor, nowrap }) => css`
		font-weight: ${({ theme }) =>
			theme.fontWeight[fWeight!] || theme.fontWeight[600]};

		font-family: ${family || "'Open Sans', sans-serif"};

		font-size: ${({ theme }) =>
			fontSize! in theme.fontSize
				? theme.fontSize[fontSize!]
				: fontSize || theme.fontSize.md};

		transition: color 0.3s;
		
		color: ${({ theme }) => theme.colors[color!] || theme.colors.title}};
		white-space: ${nowrap ? 'nowrap' : 'unset'};
		
		${
			hide &&
			`
        overflow: hidden;
		text-overflow: ellipsis;
		`
		}

		&:hover {
			color: ${({ theme }) =>
				hoverColor === 'primaryLight' ? theme.colors.primaryLight : hoverColor};
		}
	`}
`

export type { TypographyProps }
export { Wrapper, Typography }

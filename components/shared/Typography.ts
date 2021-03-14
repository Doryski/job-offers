import styled, { css } from 'styled-components'

type TypographyProps = {
	fWeight?: number
	family?: string
	fontSize?: string
	hide?: boolean
	color?: string
	hoverColor?: string
}

type WrapperProps = {
	display?: string
	margin?: string
	align?: string
	padding?: string
	minWidth?: string
}

export const Wrapper = styled.h4<WrapperProps>`
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
	as: !!as ? as : 'span',
}))`
	${({
		fWeight,
		family,
		fontSize,
		hide,
		color,
		hoverColor,
	}: TypographyProps) => css`
		font-weight: ${({ theme }) =>
			theme.fontWeight[fWeight] || theme.fontWeight[600]};
		font-family: ${family || "'Open Sans', sans-serif"};
		font-size: ${({ theme }) =>
			fontSize in theme.fontSize
				? theme.fontSize[fontSize]
				: fontSize || theme.fontSize.md};
		transition: color 0.3s;
		${
			hide &&
			`
        overflow: hidden;
		text-overflow: ellipsis;
		`
		}
		color: ${({ theme }) => theme.colors[color] || theme.colors.title}};
		&:hover {
			color: ${({ theme }) =>
				hoverColor === 'lightPink' ? theme.colors.lightPink : hoverColor};
		}
	`}
`

export default Typography

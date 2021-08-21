import styled from 'styled-components'
import { SmallLabelProps } from '.'

const Container = styled.div<SmallLabelProps>`
	padding: 0.1875em 0.4375em;
	margin: ${({ margin }) => margin};
	border: ${({ isSpan, theme }) =>
		isSpan ? `1px solid ${theme.colors.divider}` : 'none'};
	background: ${({ theme, isNew, isSpan }) =>
		(isNew && 'hsl(299, 71%, 88%)') ||
		(isSpan ? 'unset' : theme.colors.divider)};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Typography = styled.span<SmallLabelProps>`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme, isNew }) =>
		isNew ? 'hsl(286, 100%, 21%)' : theme.colors.title};
	text-align: center;
`

export { Container, Typography }

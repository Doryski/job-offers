import styled from 'styled-components'

type SmallLabelProps = {
	children: React.ReactNode
	isSpan?: boolean
	margin?: string
	isNew?: boolean
}

export const Container = styled.div<SmallLabelProps>`
	padding: 0.1875em 0.4375em;
	margin: ${({ margin }) => margin};
	border: ${({ isSpan, theme }) =>
		isSpan ? `1px solid ${theme.colors.divider}` : 'none'};
	background: ${({ theme, isNew, isSpan }) =>
		isNew ? 'rgb(245, 202, 246)' : isSpan ? 'unset' : theme.colors.divider};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const Typography = styled.span<SmallLabelProps>`
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: ${({ theme, isNew }) =>
		isNew ? 'rgb(83, 0, 108)' : theme.colors.title};
	text-align: center;
`

const SmallLabel = ({ children, isSpan, margin, isNew }: SmallLabelProps) => (
	<Container isNew={isNew} isSpan={isSpan} margin={margin}>
		<Typography isNew={isNew} isSpan={isSpan}>
			{children}
		</Typography>
	</Container>
)
SmallLabel.defaultProps = {
	isSpan: false,
	margin: '0 0.125em',
	isNew: false,
}

export default SmallLabel

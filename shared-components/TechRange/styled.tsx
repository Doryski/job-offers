import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 20%;
	flex: 0 0 20%;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 50%;
		flex: 1 0 50%;
	}
`
const RangeContainer = styled.div`
	display: flex;
	margin: 0.5em 0 0.25em;
`
const RangePoint = styled.span<{
	disabled?: boolean
	color?: string
}>`
	background-color: ${({ disabled, color }) =>
		disabled ? 'hsl(0, 0%, 96.1%)' : color};
	display: block;
	width: 15px;
	height: 10px;
	border-radius: 1px;
	margin: 0 0.05em 0 0;
`

export { Container, RangeContainer, RangePoint }

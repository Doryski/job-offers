import styled from 'styled-components'

const List = styled.ul`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 690px) {
		margin-top: 0.45em;
	}
`
const SwapPageBtn = styled.button<{
	disabled?: boolean
	active?: boolean
}>`
	display: block;
	padding: 0.45em 0.75em;
	border: 1px solid #dcdcdc;
	background: ${({ active }) => (active ? '#daefff' : '#fff')};
	font-weight: bold;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
		background: ${({ disabled }) => (disabled ? '#fff' : '#d8d4d4')};
	}
	& svg {
		fill: ${({ disabled }) => (disabled ? '#dcdcdc' : '#1f1f1f')};
	}
`
const CheveronLink = styled(SwapPageBtn)`
	display: flex;
	padding: 0.45em 0.45em;
`

const EdgeLink = styled(SwapPageBtn)`
	display: flex;
	padding: 0.45em 0.75em;
	& svg {
		margin: 0 -0.4em;
	}
`

export { CheveronLink, EdgeLink, List, SwapPageBtn }

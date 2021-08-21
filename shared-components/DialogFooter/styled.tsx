import styled from 'styled-components'

const BottomWrapper = styled.div`
	padding: 0.9375em 1.25em;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export { BottomWrapper }

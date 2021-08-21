import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.3125em;
`

const IconWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	margin-top: -0.1em;
	svg {
		font-size: 0.9rem;
	}
`

export { Wrapper, IconWrapper }

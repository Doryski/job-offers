import styled from 'styled-components'

export const InputsContainer = styled.section`
	padding: 1.25em;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`

export const ErrorMessage = styled.span<{ isSpan?: boolean }>`
	color: ${({ isSpan, theme }) =>
		isSpan ? theme.colors.span : theme.colors.error};
	font-size: ${({ theme }) => theme.fontSize.small};
	margin-left: 0.625em;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

export const InputWrapper = styled.div`
	margin: 0 0.1875em 0.625em 0.1875em;
`

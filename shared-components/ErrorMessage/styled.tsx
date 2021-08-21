import styled from 'styled-components'

const ErrorMessage = styled.span<{ isSpan?: boolean }>`
	color: ${({ isSpan, theme }) =>
		isSpan ? theme.colors.span : theme.colors.error};
	font-size: ${({ theme }) => theme.fontSize.small};
	margin-left: 0.625em;
`

export { ErrorMessage }

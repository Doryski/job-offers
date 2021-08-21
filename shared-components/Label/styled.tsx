import styled from 'styled-components'

const Container = styled.div<{ active?: boolean }>`
	padding: 0.625em 2.1875em;
	background: ${({ theme, active }) =>
		active ? theme.colors.dark : theme.colors.white};
	position: relative;
	border-radius: 5px 5px 0 0;
`

export { Container }

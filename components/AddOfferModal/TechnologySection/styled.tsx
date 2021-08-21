import styled from 'styled-components'

const IconsWrapper = styled.div`
	padding: 0.3125em 0.625em;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	margin: auto;
`
const IconWrapper = styled.div`
	padding: 0.3125em 0.625em;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0.1875em;
	width: 50%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.span};
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`

export { IconWrapper, IconsWrapper }

import styled from 'styled-components'

const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 0.1875em;
	font-size: 1.125rem;
	text-align: center;
	border-radius: 50%;
	display: inline-flex;
	margin: 0;
	position: relative;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.text};
`
const InputWrapper = styled.div`
	background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	padding: 0 0.5em;
	margin-left: 0.5em;
	border-radius: 5px;
	min-width: 150px;
	cursor: text;
	display: inline-flex;
	align-items: center;
	position: relative;
	border: 1px solid ${({ theme }) => theme.colors.buttonBackground};
`
const Input = styled.input`
	display: block;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.875rem;
	min-width: 30px;
	width: 100%;
	max-width: 100px;
	font-weight: 400;
	font-family: 'Open Sans', 'sans serif';
	flex-grow: 1;
	padding-left: 0.3125em;
	&::placeholder {
		color: ${({ theme }) => theme.colors.span};
	}
`

export { Input, InputWrapper, Button }

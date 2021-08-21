import styled from 'styled-components'

export default styled.input<{
	padding?: string
}>`
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 5px;

	padding: ${({ padding }) => padding || '0.125em 0.9375em'};
	background: ${({ theme }) => theme.colors.buttonBackground};
	color: ${({ theme }) => theme.colors.text};
	width: 100%;
	height: 40px;
	transition: all 0.3s;
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
	&:focus {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
		border: 1px solid ${({ theme }) => theme.colors.text};
	}
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 25px;
	}
`

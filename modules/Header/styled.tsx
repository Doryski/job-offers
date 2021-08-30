import styled from 'styled-components'

const Container = styled.header<{ admin?: boolean }>`
	min-height: 8vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme, admin }) =>
		admin ? theme.colors.admin : theme.colors.white};
	border-bottom: 1px solid
		${({ theme, admin }) => (admin ? theme.colors.admin : theme.colors.divider)};
	width: 100%;
	padding: 0 1em;
	@media only screen and (max-width: 760px) {
		padding: 0 0.75em;
	}
`

const LogoWrapper = styled.div`
	width: 120px;
	float: left;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.25rem;
`
const Wrapper = styled.nav`
	display: flex;
	height: 38px;
	align-items: center;
`

export { Wrapper, LogoWrapper, Container }

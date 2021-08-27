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
`

const LogoWrapper = styled.div`
	width: 120px;
	float: left;
	margin-left: 1.5em;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.25rem;
`
const Wrapper = styled.nav`
	display: flex;
	height: 38px;
	margin-right: 1.5em;
	align-items: center;
	@media (max-width: 600px) {
		margin: 0;
	}
`

export { Wrapper, LogoWrapper, Container }

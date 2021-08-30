import styled from 'styled-components'

const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 0%;
`
const NavItem = styled.li`
	display: block;
	cursor: pointer;
`

const MobileNavList = styled.ul`
	width: 100%;
	padding-bottom: 0.625em;
`

const MobileNavItem = styled.li`
	display: flex;
	padding: 0.5em 1em 0.5em 2em;
	height: 56px;
	width: 100%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.title};
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`

const MobileNavIconWrapper = styled.div`
	display: inline-flex;
	margin: auto 0;
`
const MobileNavTitleWrapper = styled.div`
	margin: auto 0 auto 2em;
`

export {
	NavItem,
	NavList,
	MobileNavList,
	MobileNavItem,
	MobileNavIconWrapper,
	MobileNavTitleWrapper,
}

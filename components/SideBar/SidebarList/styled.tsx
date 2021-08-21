import styled from 'styled-components'

const List = styled.ul`
	width: 100%;
	padding-bottom: 0.625em;
`

const ListItem = styled.li`
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

const IconWrapper = styled.div`
	display: inline-flex;
	margin: auto 0;
`
const TitleWrapper = styled.div`
	margin: auto 0 auto 2em;
`

export { List, ListItem, IconWrapper, TitleWrapper }

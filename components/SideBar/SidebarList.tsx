import styled from 'styled-components'
import Typography from '@/shared-components/Typography'

const sideBarItems = ['There', 'will', 'be', 'some', 'menu', 'list']

export const List = styled.ul`
	width: 100%;
	padding-bottom: 0.625em;
`

export const ListItem = styled.li`
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

export const IconWrapper = styled.div`
	display: inline-flex;
	margin: auto 0;
`
export const TitleWrapper = styled.div`
	margin: auto 0 auto 2em;
`

const SidebarList = () => (
	<List>
		{sideBarItems.map(item => (
			<ListItem key={item}>
				{/* <IconWrapper>{item.icon}</IconWrapper> */}
				<TitleWrapper>
					<Typography fWeight={400}>{item}</Typography>
				</TitleWrapper>
			</ListItem>
		))}
	</List>
)

export default SidebarList

import { Typography } from '@/shared-components/Typography'
import { List, ListItem, TitleWrapper } from './styled'

const sideBarItems = ['There', 'will', 'be', 'some', 'menu', 'list']

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

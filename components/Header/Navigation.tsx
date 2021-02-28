import styled from 'styled-components'
import Typography from '../shared/Typography'
import { NAV_LINKS } from '../../helpers/utils'
import theme, { textColors } from '../../theme'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
	const router = useRouter()
	const isActive = (linkPath: string, currentPath: string) =>
		linkPath === currentPath
	return (
		<NavList>
			<Link href={'/admin'}>
				<a>
					<NavItem>
						<Typography
							fWeight={theme.fontWeight[600]}
							color={
								isActive('/admin', router.pathname)
									? textColors.pink
									: textColors.span
							}
							margin='0 0.375em'
							minWidth='64px'
							hoverColor={
								isActive('/admin', router.pathname)
									? 'none'
									: textColors.lightPink
							}>
							Admin panel
						</Typography>
					</NavItem>
				</a>
			</Link>
			{NAV_LINKS.map(({ title, path }) => {
				return (
					<Link href={path} key={title}>
						<a>
							<NavItem>
								<Typography
									fWeight={theme.fontWeight[600]}
									color={
										isActive(path, router.pathname)
											? textColors.pink
											: textColors.span
									}
									margin='0 0.375em'
									minWidth='64px'
									hoverColor={
										isActive(path, router.pathname)
											? 'none'
											: textColors.lightPink
									}>
									{title}
								</Typography>
							</NavItem>
						</a>
					</Link>
				)
			})}
		</NavList>
	)
}

export const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 0%;
`
export const NavItem = styled.li`
	display: block;
	cursor: pointer;
`

export default Navigation

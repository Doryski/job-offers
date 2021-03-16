import styled from 'styled-components'
import Typography from '@/components/shared/Typography'
import { NAV_LINKS } from '@/helpers/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

const Navigation = () => {
	const router = useRouter()
	const isActive = (
		linkPath: string,
		currentPath: string,
		matchAll: boolean = false
	) => (matchAll ? currentPath.startsWith(linkPath) : linkPath === currentPath)
	const [session] = useSession()
	const isAdminPanel = isActive('/admin', router.pathname, true)

	return (
		<NavList>
			{session?.user.admin && (
				<Link href='/admin'>
					<a>
						<NavItem>
							<Typography
								fWeight={600}
								color={isAdminPanel ? 'pink' : 'span'}
								margin='0 0.375em'
								minWidth='64px'
								hoverColor={isAdminPanel ? 'none' : 'lightPink'}>
								Admin panel
							</Typography>
						</NavItem>
					</a>
				</Link>
			)}
			{NAV_LINKS.map(({ title, path }) => {
				return (
					<Link href={path} key={title}>
						<a>
							<NavItem>
								<Typography
									fWeight={600}
									color={isActive(path, router.pathname) ? 'pink' : 'span'}
									margin='0 0.375em'
									minWidth='64px'
									hoverColor={
										isActive(path, router.pathname) ? 'none' : 'lightPink'
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

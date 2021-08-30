import { Typography } from '@/shared-components/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import {
	DESKTOP_NAV_LINKS_PRIVATE,
	DESKTOP_NAV_LINKS_PUBLIC,
	MOBILE_NAV_LINKS_PRIVATE,
	MOBILE_NAV_LINKS_PUBLIC,
} from '@/utils/navLinks'
import {
	MobileNavItem,
	MobileNavList,
	MobileNavTitleWrapper,
	NavItem,
	NavList,
} from './styled'

type NavigationProps = {
	handleClick?: () => void
}

const Navigation = ({ handleClick }: NavigationProps) => {
	const { isMobile } = useDeviceDetect()
	const router = useRouter()
	const isActive = (linkPath: string, currentPath: string, matchAll: boolean) =>
		matchAll ? currentPath.startsWith(linkPath) : linkPath === currentPath
	const [session] = useSession()

	const allMobileNavLinks = session?.user
		? [...MOBILE_NAV_LINKS_PRIVATE, ...MOBILE_NAV_LINKS_PUBLIC]
		: MOBILE_NAV_LINKS_PUBLIC

	const allDesktopNavLinks = session?.user
		? [...DESKTOP_NAV_LINKS_PRIVATE, ...DESKTOP_NAV_LINKS_PUBLIC]
		: DESKTOP_NAV_LINKS_PUBLIC

	return isMobile ? (
		<MobileNavList>
			{allMobileNavLinks.map(({ title, path }) => (
				<Link href={path} key={title}>
					<a>
						<MobileNavItem onClick={handleClick}>
							{/* <MobileNavIconWrapper>{icon}</MobileNavIconWrapper> */}
							<MobileNavTitleWrapper>
								<Typography fWeight={400}>{title}</Typography>
							</MobileNavTitleWrapper>
						</MobileNavItem>
					</a>
				</Link>
			))}
		</MobileNavList>
	) : (
		<NavList>
			{allDesktopNavLinks.map(({ title, path, matchAll }) => (
				<Link href={path} key={title}>
					<a>
						<NavItem>
							<Typography
								fWeight={600}
								color={
									isActive(path, router.pathname, matchAll) ? 'primary' : 'span'
								}
								margin='0 0.375em'
								minWidth='64px'
								hoverColor={
									isActive(path, router.pathname, matchAll)
										? 'none'
										: 'primaryLight'
								}>
								{title}
							</Typography>
						</NavItem>
					</a>
				</Link>
			))}
		</NavList>
	)
}

Navigation.defaultProps = {
	handleClick: null,
}

export default Navigation

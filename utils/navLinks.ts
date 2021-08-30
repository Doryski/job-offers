import { NavLink } from 'types/navLink'

const COMMON_LINKS_PRIVATE = [
	{ title: 'Admin panel', path: '/admin', matchAll: true },
]
const COMMON_LINKS_PUBLIC = [{ title: 'Offers', path: '/', matchAll: false }]

const DESKTOP_NAV_LINKS_PRIVATE: NavLink[] = [...COMMON_LINKS_PRIVATE]
const DESKTOP_NAV_LINKS_PUBLIC: NavLink[] = [...COMMON_LINKS_PUBLIC]

const MOBILE_NAV_LINKS_PRIVATE: NavLink[] = [...COMMON_LINKS_PRIVATE]
const MOBILE_NAV_LINKS_PUBLIC: NavLink[] = [...COMMON_LINKS_PUBLIC]

export {
	DESKTOP_NAV_LINKS_PUBLIC,
	DESKTOP_NAV_LINKS_PRIVATE,
	MOBILE_NAV_LINKS_PRIVATE,
	MOBILE_NAV_LINKS_PUBLIC,
}

import { useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { MoreHoriz } from '@material-ui/icons'
import TechList, { TechName } from './TechList'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import { useRouter } from 'next/router'
import CustomButton from '../shared/CustomButton'

const DesktopView = () => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	useDetectOutsideClick(listRef, close)

	return (
		<Container>
			<Link href='/' shallow>
				<LinkBtn>
					<CustomButton
						padding='.7em 3.15em'
						minWidth='60px'
						margin='.25em 0'
						active={!query.tech}
						fWeight={!query.tech ? 600 : 400}>
						<TechName all>All</TechName>
					</CustomButton>
				</LinkBtn>
			</Link>
			<TechList />
		</Container>
	)
}
export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(7, auto);
	width: 100%;

	@media (max-width: 1025px) {
		padding: 1.875em;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
`

export const AllIconContainer = styled.div<{ focus?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	text-transform: none;
	width: 36px;
	min-width: 36px;
	height: 36px;
	line-height: 36px;
	margin-top: 0.45em;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 50%;
	background: ${({ focus, theme }) =>
		focus ? theme.techColors.all : theme.techColors.disabled};
`

export const LinkBtn = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
`
export const StyledMoreHorizIcon = styled(MoreHoriz)`
	margin: -10px 0 0 0.125em;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
	border-radius: 50%;
	width: 1.25em !important;
	height: 1.25em !important;
	padding: 0.125em;
	transition: background-color 0.3s !important;
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`

export default DesktopView

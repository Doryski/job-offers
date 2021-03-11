import { useRef } from 'react'
import styled from 'styled-components'
import { TECHNOLOGIES } from '../../helpers/utils'
import Link from 'next/link'
import { DropdownList, DropdownListItem } from '../shared/DropdownList'
import stringFormat from '../../helpers/stringFormat'
import { MoreHoriz } from '@material-ui/icons'
import TechList, { TechName, IconWrapper } from './TechList'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import { useRouter } from 'next/router'
import CustomButton from '../shared/CustomButton'
import createTechQuery from '../../helpers/createTechQuery'

type DesktopViewProps = {
	toggle: VoidFunction
	close: VoidFunction
	cutTechArray?: number
	isListOpen: boolean
}

const DesktopView = ({
	toggle,
	close,
	cutTechArray,
	isListOpen,
}: DesktopViewProps) => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	useDetectOutsideClick(listRef, close)

	return (
		<Container>
			<Link href='/' shallow>
				<LinkBtn>
					<CustomButton
						padding='.7em .75em'
						minWidth='60px'
						active={!query.tech}>
						<TechName all>All</TechName>
					</CustomButton>
				</LinkBtn>
			</Link>
			<TechList cutTechArray={14} close={close} />
			<IconWrapper ref={listRef}>
				<StyledMoreHorizIcon onClick={toggle} />
				<DropdownList isOpen={isListOpen} ref={listRef}>
					{TECHNOLOGIES.slice(cutTechArray).map((tech: string) => (
						<Link href={createTechQuery(tech, query)} key={tech} shallow>
							<a onClick={close}>
								<DropdownListItem>
									<CustomButton
										active={query.tech === stringFormat(tech)}
										padding='.7em .75em'
										minWidth='100%'>
										{tech}
									</CustomButton>
								</DropdownListItem>
							</a>
						</Link>
					))}
				</DropdownList>
			</IconWrapper>
		</Container>
	)
}
export const Container = styled.div`
	display: flex;
	align-items: center;
	margin: -0.15em 0 0 0;
	flex: 1;

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
	align-items: stretch;
	height: 64px;
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

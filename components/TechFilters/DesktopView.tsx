import { useRef } from 'react'
import styled from 'styled-components'
import TechIcon from '../shared/TechIcon'
import { TECHNOLOGIES } from '../../helpers/utils'
import Link from 'next/link'
import { DropdownList, DropdownListItem } from '../shared/DropdownList'
import Typography from '../shared/Typography'
import stringFormat from '../../helpers/stringFormat'
import theme from '../../theme'
import { MoreHoriz } from '@material-ui/icons'
import TechList, { TechName, IconWrapper } from './TechList'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'
import { useRouter } from 'next/router'
import createQuery from '../../helpers/createQuery'
import CustomButton from '../shared/CustomButton';

type DesktopViewProps = {
	toggle: VoidFunction
	close: VoidFunction
	cutTechArray?: number
	isListOpen: boolean
}

const ALL_TECH_NAME = 'All'
const DesktopView = ({
	toggle,
	close,
	cutTechArray,
	isListOpen,
}: DesktopViewProps) => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null)
	useDetectOutsideClick(listRef, close)
	// if clicked on tech filter -> screen changes from all filters to table of technologies 3x7

	return (
		<Container>
			<Link href={'/'} shallow>
				<LinkBtn>
					<CustomButton>
						<TechName all>{ALL_TECH_NAME}</TechName>
					</CustomButton>
				</LinkBtn>
			</Link>
			<TechList cutTechArray={14} close={close} />
			<IconWrapper ref={listRef}>
				<StyledMoreHorizIcon onClick={toggle} />
				<DropdownList isOpen={isListOpen} ref={listRef}>
					{TECHNOLOGIES.slice(cutTechArray).map((tech: string) => {
						let techQuery: string
						if (query.tech === stringFormat(tech)) {
							techQuery = createQuery({ query: 'tech', value: '' }, query)
						} else {
							techQuery = createQuery(
								{ query: 'tech', value: stringFormat(tech) },
								query
							)
						}

						return (
							<Link href={techQuery} key={tech} shallow>
								<a onClick={close}>
									<DropdownListItem>
										<CustomButton>


											<Typography
												fWeight={theme.fontWeight[400]}
												margin='1em 0 0 0.3em'>
												{tech}
											</Typography>
										</CustomButton>
									</DropdownListItem>
								</a>
							</Link>
						)
					})}
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
	margin-right: 0.3125em;
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

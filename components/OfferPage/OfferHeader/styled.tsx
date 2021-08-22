import {
	AccessTime,
	Business,
	Note,
	People,
	TrendingUp,
} from '@material-ui/icons'
import { CSSProperties } from 'react'
import styled from 'styled-components'

const BusinessIcon = styled(Business)`
	color: hsl(0, 47.6%, 32.9%);
	/* hsl(0, 100%, 66%); */
`
const TrendingUpIcon = styled(TrendingUp)`
	color: hsl(122.8, 38.5%, 56.7%);
`
const PeopleIcon = styled(People)`
	color: hsl(50, 100%, 35.5%);
	/* hsl(33.5, 100%, 49%); */
`
const NoteIcon = styled(Note)`
	color: hsl(169.3, 100%, 26.3%);
	/* hsl(291.3, 46.6%, 50.8%); */
	transform: rotate(-90deg);
`
const AccessTimeIcon = styled(AccessTime)`
	color: hsl(217.5, 100%, 63.3%);
`

const LabelsRow = styled.div`
	display: flex;
	justify-content: space-between;
`

const HeaderContainer = styled.section`
	position: relative;
`

const MainInfoContainer = styled.section`
	margin: 1em 0;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;
	padding: 0.3125em 1em;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	display: flex;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
const InfoLabelsContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const SubWrapper = styled.div<{
	justifyContent: CSSProperties['justifyContent']
}>`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent};
`

export {
	InfoLabelsContainer,
	MainInfoContainer,
	TrendingUpIcon,
	PeopleIcon,
	NoteIcon,
	LabelsRow,
	AccessTimeIcon,
	BusinessIcon,
	HeaderContainer,
	SubWrapper,
}

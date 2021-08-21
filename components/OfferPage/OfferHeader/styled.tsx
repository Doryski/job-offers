import {
	AccessTime,
	Business,
	Note,
	People,
	TrendingUp,
} from '@material-ui/icons'
import styled from 'styled-components'

const BusinessIcon = styled(Business)`
	color: rgb(124, 44, 44);
	/* rgb(255, 82, 82); */
`
const TrendingUpIcon = styled(TrendingUp)`
	color: rgb(102, 187, 106);
`
const PeopleIcon = styled(People)`
	color: rgb(181, 151, 0);
	/* rgb(251, 140, 0); */
`
const NoteIcon = styled(Note)`
	color: rgb(0 134 110);
	/* rgb(171, 71, 188); */
	transform: rotate(-90deg);
`
const AccessTimeIcon = styled(AccessTime)`
	color: rgb(68, 138, 255);
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
}

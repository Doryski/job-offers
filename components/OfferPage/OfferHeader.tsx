import styled from 'styled-components'
import InfoLabel from '@/components/shared/InfoLabel'
import Typography from '@/components/shared/Typography'
import formatThous from '@/helpers/formatThous'
import { OfferPageDataType } from '@/types'
import {
	Business,
	People,
	Note,
	AccessTime,
	TrendingUp,
} from '@material-ui/icons'
import { ICON_SIZE } from '@/helpers/utils'

export const BusinessIcon = styled(Business)`
	color: rgb(124, 44, 44);
	/* rgb(255, 82, 82); */
`
export const TrendingUpIcon = styled(TrendingUp)`
	color: rgb(102, 187, 106);
`
export const PeopleIcon = styled(People)`
	color: rgb(181, 151, 0);
	/* rgb(251, 140, 0); */
`
export const NoteIcon = styled(Note)`
	color: rgb(0 134 110);
	/* rgb(171, 71, 188); */
	transform: rotate(-90deg);
`
export const AccessTimeIcon = styled(AccessTime)`
	color: rgb(68, 138, 255);
`
const OfferHeader = ({ offer }: { offer: OfferPageDataType }) => {
	const {
		salaryFrom,
		salaryTo,
		title,
		street,
		city,
		companyName,
		companySize,
		expLvl,
		empType,
		dateAdded,
	} = offer
	const INFO_LABELS = {
		top: [
			{
				icon: <BusinessIcon fontSize={ICON_SIZE} />,
				feature: 'Company name',
				value: companyName,
			},
			{
				icon: <TrendingUpIcon fontSize={ICON_SIZE} />,
				feature: 'EXP. lvl',
				value: expLvl,
			},
		],
		bottom: [
			{
				icon: <PeopleIcon fontSize={ICON_SIZE} />,
				feature: 'Company size',
				value: companySize,
			},
			{
				icon: <NoteIcon fontSize={ICON_SIZE} />,
				feature: 'EMP. type',
				value: empType,
			},
			{
				icon: <AccessTimeIcon fontSize={ICON_SIZE} />,
				feature: 'Added',
				value: dateAdded,
			},
		],
	}

	return (
		<HeaderContainer>
			<MainInfoContainer>
				<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
					<Typography
						color='title'
						align='left'
						fontSize='xl'
						margin='0.25em 0'>
						{title}
					</Typography>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography color='text' align='left' margin='0.25em 0' fWeight={400}>
						Salary:{' '}
						<strong>
							{formatThous(salaryFrom)} - {formatThous(salaryTo)} PLN
						</strong>
					</Typography>
					<Typography color='text' align='left' margin='0.25em 0' fWeight={400}>
						Address:{' '}
						<strong>
							{street}, {city}
						</strong>
					</Typography>
				</div>
			</MainInfoContainer>
			<InfoLabelsContainer>
				<LabelsRow>
					{INFO_LABELS.top.map((label) => (
						<InfoLabel label={label} />
					))}
				</LabelsRow>
				<LabelsRow>
					{INFO_LABELS.bottom.map((label) => (
						<InfoLabel label={label} />
					))}
				</LabelsRow>
			</InfoLabelsContainer>
		</HeaderContainer>
	)
}

export const LabelsRow = styled.div`
	display: flex;
	justify-content: space-between;
`

export const HeaderContainer = styled.section`
	position: relative;
`

export const MainInfoContainer = styled.section`
	margin: 1em 0;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;
	padding: 0.3125em 1em;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	display: flex;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 10.625em;
	}
`
export const InfoLabelsContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`
export default OfferHeader

import InfoLabel from '@/shared-components/InfoLabel'
import { Typography } from '@/shared-components/Typography'
import formatThous from 'utils/formatThous'
import { OfferPageDataType } from '@/types'
import { ICON_SIZE } from '@/utils/vars'
import {
	AccessTimeIcon,
	BusinessIcon,
	HeaderContainer,
	InfoLabelsContainer,
	LabelsRow,
	MainInfoContainer,
	NoteIcon,
	PeopleIcon,
	TrendingUpIcon,
} from './styled'

type OfferHeaderProps = { offer: OfferPageDataType }

const OfferHeader = ({ offer }: OfferHeaderProps) => {
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
					{INFO_LABELS.top.map(label => (
						<InfoLabel key={label.feature} label={label} />
					))}
				</LabelsRow>
				<LabelsRow>
					{INFO_LABELS.bottom.map(label => (
						<InfoLabel key={label.feature} label={label} />
					))}
				</LabelsRow>
			</InfoLabelsContainer>
		</HeaderContainer>
	)
}

export default OfferHeader

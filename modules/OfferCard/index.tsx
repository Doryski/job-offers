import { Typography } from '@/shared-components/Typography'
import SmallLabel from '@/shared-components/SmallLabel'
import CustomLabel from '@/shared-components/CustomLabel'
import dateDiff from 'utils/dateDiff'
import formatThous from 'utils/formatThous'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import moment from 'moment'
import { OfferPageDataType } from '@/types'
import {
	Container,
	InfoContainer,
	InfoWrapper,
	MobileWrapper,
	RequirementsWrapper,
	SalaryWrapper,
	TechColor,
	Wrapper,
} from './styled'

type OfferCardProps = {
	offer: OfferPageDataType
	handleOfferCardClick: () => void
	index: number
}

const OfferCard = ({ offer, handleOfferCardClick, index }: OfferCardProps) => {
	const {
		title,
		salaryFrom,
		salaryTo,
		dateAdded,
		companyName,
		city,
		technology,
	} = offer
	const days = dateDiff(moment(), dateAdded)
	const isNew = days < 1

	const { isMobile } = useDeviceDetect(600)

	const dateLabel = (
		<SmallLabel isNew={isNew} margin='0 0.125em 0 0.625em'>
			{isNew ? 'New' : `${days} day${days !== 1 && 's'} ago`}
		</SmallLabel>
	)
	const companyInfo = (
		<InfoWrapper>
			<CustomLabel type='business' label={companyName} />
			<CustomLabel type='location' label={city} />
			{dateLabel}
		</InfoWrapper>
	)
	const offerTitleC = (
		<Typography color='title' align='left' fontSize='large' hide>
			{title}
		</Typography>
	)

	const salaryRange = (
		<Typography
			color='text'
			align='left'
			fWeight={400}
			fontSize={isMobile ? 'md' : 'large'}>
			{formatThous(salaryFrom)} - {formatThous(salaryTo)} PLN
		</Typography>
	)

	return (
		<Container onClick={handleOfferCardClick}>
			<TechColor index={index} />
			<InfoContainer>
				{isMobile ? (
					<>
						<MobileWrapper>
							{offerTitleC}
							{dateLabel}
						</MobileWrapper>
						<MobileWrapper>
							<SalaryWrapper>{salaryRange}</SalaryWrapper>
							{companyInfo}
						</MobileWrapper>
					</>
				) : (
					<>
						<Wrapper>
							<section>{offerTitleC}</section>
							<RequirementsWrapper>
								{technology
									.slice(0, 3)
									.sort((a, b) => (a.techLvl < b.techLvl ? 1 : -1))
									.map(({ tech }) => (
										<SmallLabel isSpan key={tech}>
											{tech.toLowerCase()}
										</SmallLabel>
									))}
							</RequirementsWrapper>
						</Wrapper>
						<Wrapper>
							<SalaryWrapper>{salaryRange}</SalaryWrapper>
							{companyInfo}
						</Wrapper>
					</>
				)}
			</InfoContainer>
		</Container>
	)
}

export default OfferCard

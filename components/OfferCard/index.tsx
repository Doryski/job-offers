import Typography from '../shared/Typography'
import styled from 'styled-components'
import SmallLabel from '../shared/SmallLabel'
import CustomLabel from '../shared/CustomLabel'
import dateDiff from '../../helpers/dateDiff'
import formatThous from '../../helpers/formatThous'
import theme, { textColors } from '../../theme'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import Link from 'next/link'
import moment from 'moment'
import { OfferPageDataType } from '../../types'

const OfferCard = ({
	offerInfo,
	index,
	setCurrentOffer,
}: {
	offerInfo: OfferPageDataType
	index: number
	setCurrentOffer
}) => {
	const {
		offerId,
		title,
		salaryFrom,
		salaryTo,
		dateAdded,
		companyName,
		city,
	} = offerInfo
	const days = dateDiff(moment(), dateAdded)
	const isNew = days < 1

	const isMobile = useDeviceDetect(600)

	const dateLabel = (
		<SmallLabel isNew={isNew} margin='0 0.3125em 0 0.625em'>
			{isNew ? 'New' : `${days}d ago`}
		</SmallLabel>
	)
	const companyInfo = (
		<InfoWrapper>
			<CustomLabel type='business' label={companyName} />
			<CustomLabel type='location' label={city} />
		</InfoWrapper>
	)
	const offerTitleC = (
		<Typography
			color={textColors.title}
			align='flex-start'
			fontSize={theme.fontSize.large}
			hide>
			{title}
		</Typography>
	)

	const salaryRange = (
		<Typography
			color={textColors.salary}
			align='flex-start'
			fWeight={theme.fontWeight[400]}
			fontSize={isMobile ? theme.fontSize.md : theme.fontSize.large}
			margin='0 .1em 0 0'>
			{formatThous(salaryFrom)} - {formatThous(salaryTo)} PLN
		</Typography>
	)

	return (
		<Container onClick={() => setCurrentOffer(offerInfo)}>
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
						<TopWrapper>
							<TitleWrapper>{offerTitleC}</TitleWrapper>
							<SalaryWrapper>
								{salaryRange}
								{dateLabel}
							</SalaryWrapper>
						</TopWrapper>
						<BottomWrapper>
							{companyInfo}
							<RequirementsWrapper>
								{/* {technology.slice(0, 3).map(({ tech }) => (
											<SmallLabel isSpan key={tech}>
												{tech.toLowerCase()}
											</SmallLabel>
										))} */}
							</RequirementsWrapper>
						</BottomWrapper>
					</>
				)}
			</InfoContainer>
		</Container>
	)
}
export const Container = styled.div`
	margin: 0 0.625em 0.75em;
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.shadows.card};
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	overflow: hidden;
	transition: box-shadow 0.13s;
	cursor: pointer;
	height: 77px;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.cardHover};
	}
`
export const TechColor = styled.div<{ index: number }>`
	background-color: ${({ index }) => (index % 2 ? 'blue' : 'orange')};
	width: 5px;
`
export const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0.5em 0.25em 0.5em 1em;
	@media only screen and (max-width: 600px) {
		/* padding: 0; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`
export const TopWrapper = styled.div`
	display: flex;
	padding: 0.35em 0 0.45em;
	flex-wrap: wrap;
	@media only screen and (max-width: 600px) {
		/* padding: 0; */
	}
`

export const BottomWrapper = styled.div`
	display: flex;
`

export const TitleWrapper = styled.div`
	flex: 1;
`

export const SalaryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.625em 0 0;
	@media only screen and (max-width: 600px) {
		padding: 0;
	}
`

export const InfoWrapper = styled.div`
	flex: 1;
	display: flex;
	@media only screen and (max-width: 600px) {
		align-items: flex-end;
		justify-content: flex-end;
	}
`

export const RequirementsWrapper = styled.div`
	display: flex;
	margin-right: 0.875em;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`
export const MobileWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export default OfferCard

import Typography from '@/components/shared/Typography'
import styled from 'styled-components'
import SmallLabel from '@/components/shared/SmallLabel'
import CustomLabel from '@/components/shared/CustomLabel'
import dateDiff from '@/helpers/dateDiff'
import formatThous from '@/helpers/formatThous'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import moment from 'moment'
import { OfferPageDataType } from '@/types'
import { Dispatch, SetStateAction } from 'react'

const OfferCard = ({
	offerInfo,
	setCurrentOffer,
	setShowFilters,
	index,
}: {
	offerInfo: OfferPageDataType
	setCurrentOffer: Dispatch<SetStateAction<OfferPageDataType>>
	setShowFilters: Dispatch<SetStateAction<boolean>>
	index: number
}) => {
	const {
		title,
		salaryFrom,
		salaryTo,
		dateAdded,
		companyName,
		city,
		technology,
	} = offerInfo
	const days = dateDiff(moment(), dateAdded)
	const isNew = days < 1

	const isMobile = useDeviceDetect(600)

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
		<Container
			onClick={() => {
				setCurrentOffer(offerInfo)
				setShowFilters(false)
			}}>
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
							<TitleWrapper>{offerTitleC}</TitleWrapper>
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
export const Container = styled.div`
	margin: 0 0.5em 0.75em 0.75em;
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.shadows.card};
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	overflow: hidden;
	transition: box-shadow 0.13s;
	cursor: pointer;
	min-height: 77px;
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
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
	padding: 0.5em 1em;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export const TitleWrapper = styled.div``

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
	display: flex;
	@media only screen and (max-width: 600px) {
		align-items: flex-end;
		justify-content: flex-end;
	}
`

export const RequirementsWrapper = styled.div`
	display: flex;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`
export const MobileWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export default OfferCard

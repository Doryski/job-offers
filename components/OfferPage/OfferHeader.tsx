import styled from 'styled-components'
import InfoLabel from '../shared/InfoLabel'
import Typography from '../shared/Typography'
import formatThous from '../../helpers/formatThous'
import { INFO_LABELS } from '../../helpers/utils'
import { OfferPageDataType } from '../../types'

const OfferHeader = ({ offer }: { offer: OfferPageDataType }) => {
	const { salaryFrom, salaryTo, title, street, city } = offer

	return (
		<HeaderContainer>
			<MainInfoContainer>
				<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
					<Typography
						color={'title'}
						align='left'
						fontSize='xl'
						margin='0.25em 0'>
						{title}
					</Typography>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography color='text' align='left' margin='0.25em 0' fWeight={400}>
						Salary: {formatThous(salaryFrom)} - {formatThous(salaryTo)} PLN
					</Typography>
					<Typography color='text' align='left' margin='0.25em 0' fWeight={400}>
						Address: {street}, {city}
					</Typography>
				</div>
			</MainInfoContainer>
			<InfoLabelsContainer>
				{INFO_LABELS.map(({ id, title }: { id: number; title: string }) => (
					<InfoLabel key={id} id={id} title={offer[title]} />
				))}
			</InfoLabelsContainer>
		</HeaderContainer>
	)
}

export const HeaderContainer = styled.div`
	position: relative;
`

export const MainInfoContainer = styled.div`
	margin: 1em 0 2em;
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
export const InfoLabelsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export default OfferHeader

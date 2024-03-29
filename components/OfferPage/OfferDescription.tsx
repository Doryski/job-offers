import React from 'react'
import styled from 'styled-components'
import Typography from '@/components/shared/Typography'
import { Wrapper } from './StyledComponents'

export const DescriptionContainer = styled.section`
	margin-top: 1.875em;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
export const DescriptionContent = styled.div`
	color: ${({ theme }) => theme.colors.title};
`

const OfferDescription = ({ description }: { description: string }) => (
	<DescriptionContainer>
		<Typography
			color='title'
			fWeight={500}
			fontSize='xl'
			align='left'
			margin='0.625em 1.25em'>
			Description
		</Typography>

		<Wrapper>
			<DescriptionContent>{description}</DescriptionContent>
		</Wrapper>
	</DescriptionContainer>
)

export default OfferDescription

import React, { lazy } from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PeopleIcon from '@material-ui/icons/People'

const CustomLabel = ({
	label,
	type,
}: {
	label: string
	type: 'business' | 'location'
}) => {
	return (
		<Wrapper>
			<IconWrapper>
				{type === 'business' && <BusinessIcon />}
				{type === 'location' && <LocationOnIcon />}
			</IconWrapper>
			<Typography color='span' fontSize='small' fWeight={400}>
				{label}
			</Typography>
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.3125em;
`

export const IconWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	margin-top: -0.1em;
	svg {
		font-size: 0.9rem;
	}
`
export default CustomLabel

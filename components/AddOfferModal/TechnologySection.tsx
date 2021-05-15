import React, { useContext } from 'react'
import { TECH_LVL_OPTIONS } from '@/helpers/utils'
import styled from 'styled-components'
import RemoveIcon from '@material-ui/icons/Remove'
import useTechSize from '@/hooks/useTechSize'
import AddIcon from '@material-ui/icons/Add'
import inputProps from '@/helpers/inputProps'
import { Wrapper, InputsContainer } from './StyledForm'
import { AddOfferContext } from './AddOfferContext'
import InputComponent from './CustomInput'
import SelectComponent from './CustomSelect'

export const IconsWrapper = styled.div`
	padding: 0.3125em 0.625em;
	border-radius: 5px;
	display: flex;
	place-items: center;
	width: 200px;
	margin: auto;
`
export const IconWrapper = styled.div`
	padding: 0.3125em 0.625em;
	border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
	border-radius: 5px;
	display: flex;
	place-items: center;
	margin: 0 0.1875em;
	width: 50%;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.span};
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
const TechnologySection = () => {
	const { register, errors } = useContext(AddOfferContext)
	const [techSize, handleTechSize] = useTechSize()

	const formProps = { register, errors }

	return (
		<InputsContainer>
			{[...Array(techSize)].map((_, index) => (
				<Wrapper key={index}>
					<InputComponent
						max={35}
						type='text'
						{...inputProps('Technology', `technology[${index}]`, false)}
						{...formProps}
					/>
					<SelectComponent
						options={{
							array: TECH_LVL_OPTIONS,
							fn: ({ id, title }: { id: number; title: string }) => (
								<option key={id} value={id}>
									{title}
								</option>
							),
						}}
						{...inputProps('Tech level', `techLvl[${index}]`, false)}
						{...formProps}
					/>
				</Wrapper>
			))}

			<IconsWrapper>
				{techSize < 10 && (
					<IconWrapper onClick={handleTechSize.add}>
						<AddIcon />
					</IconWrapper>
				)}

				{techSize > 1 && (
					<IconWrapper onClick={handleTechSize.remove}>
						<RemoveIcon />
					</IconWrapper>
				)}
			</IconsWrapper>
		</InputsContainer>
	)
}

export default TechnologySection

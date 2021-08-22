import React, { useContext } from 'react'
import { TECH_LVL_OPTIONS } from '@/utils/vars'
import RemoveIcon from '@material-ui/icons/Remove'
import useTechSize from '@/hooks/useTechSize'
import AddIcon from '@material-ui/icons/Add'
import createIteration from '@/utils/createIteration'
import inputProps from 'utils/inputProps'
import { Wrapper, InputsContainer } from '../styled'
import { AddOfferContext } from '../AddOfferContext'
import InputComponent from '../CustomInput'
import SelectComponent from '../CustomSelect'
import { IconsWrapper, IconWrapper } from './styled'

type TechLevelOption = typeof TECH_LVL_OPTIONS[0]

const TechnologySection = () => {
	const { register, errors } = useContext(AddOfferContext)
	const [techSize, handleTechSize] = useTechSize()

	const formProps = { register, errors }

	return (
		<InputsContainer>
			{createIteration(techSize).map(index => (
				<Wrapper key={index}>
					<InputComponent
						max={35}
						type='text'
						{...inputProps('Technology', `technology[${index}]`, false)}
						{...formProps}
					/>
					<SelectComponent<TechLevelOption>
						options={{
							array: TECH_LVL_OPTIONS,
							fn: ({ id, title }: TechLevelOption) => (
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

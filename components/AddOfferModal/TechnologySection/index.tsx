import React, { useContext } from 'react'
import { TECH_LVL_OPTIONS } from '@/utils/vars'
import RemoveIcon from '@material-ui/icons/Remove'
import useTechSize from '@/hooks/useTechSize'
import AddIcon from '@material-ui/icons/Add'
import inputProps from 'utils/inputProps'
import { Wrapper, InputsContainer } from '../styled'
import { AddOfferContext } from '../AddOfferContext'
import InputComponent from '../CustomInput'
import SelectComponent from '../CustomSelect'
import { IconsWrapper, IconWrapper } from './styled'

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

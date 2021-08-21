import React, { useContext } from 'react'
import { EXP_LVL_OPTIONS, EMP_TYPE_OPTIONS, TECHNOLOGIES } from '@/utils/vars'
import inputProps from 'utils/inputProps'
import InputComponent from '../CustomInput'
import SelectComponent from '../CustomSelect'
import { Wrapper, InputsContainer } from '../styled'
import { AddOfferContext } from '../AddOfferContext'

const InfoSection = () => {
	const { register, errors } = useContext(AddOfferContext)
	const formProps = { register, errors }
	const SALARY_STEP = 100
	const mapOptions = (option: string) => (
		<option key={option} value={option}>
			{option}
		</option>
	)

	return (
		<InputsContainer>
			<SelectComponent
				options={{ array: TECHNOLOGIES, fn: mapOptions }}
				{...inputProps('Technology', 'tech')}
				{...formProps}
			/>

			<InputComponent
				type='text'
				{...inputProps('Offer title', 'title')}
				{...formProps}
			/>

			<Wrapper>
				<InputComponent
					type='number'
					step={SALARY_STEP}
					{...inputProps('Salary from')}
					{...formProps}
				/>
				<InputComponent
					type='number'
					step={SALARY_STEP}
					{...inputProps('Salary to')}
					{...formProps}
				/>
			</Wrapper>

			<Wrapper>
				<SelectComponent<string>
					options={{
						array: EMP_TYPE_OPTIONS,
						fn: mapOptions,
					}}
					{...inputProps('Employment type', 'empType')}
					{...formProps}
				/>

				<SelectComponent
					options={{
						array: EXP_LVL_OPTIONS.map(lvl => lvl.myCapitalizeFirstLetter()),
						fn: mapOptions,
					}}
					{...inputProps('Experience', 'expLvl')}
					{...formProps}
				/>
			</Wrapper>
		</InputsContainer>
	)
}

export default InfoSection

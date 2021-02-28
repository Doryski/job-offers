import React, { useContext } from 'react'
import _ from 'lodash'
import InputComponent from './CustomInput'
import SelectComponent from './CustomSelect'
import { Wrapper, InputsContainer } from './StyledForm'
import {
	EXP_LVL_OPTIONS,
	EMP_TYPE_OPTIONS,
	TECHNOLOGIES,
} from '../../helpers/utils'
import { AddOfferContext } from './AddOfferContext'

const InfoSection = () => {
	const { register, errors } = useContext(AddOfferContext)
	const SALARY_STEP = 100

	return (
		<InputsContainer>
			<SelectComponent
				name='tech'
				label='Technology'
				register={register}
				required
				errors={errors}
				options={{ array: TECHNOLOGIES }}
			/>

			<InputComponent
				type='text'
				name='title'
				label='Offer title'
				register={register}
				required
				errors={errors}
			/>

			<Wrapper>
				<InputComponent
					type='number'
					name='salaryFrom'
					label='Salary from'
					register={register}
					required
					errors={errors}
					step={SALARY_STEP}
				/>
				<InputComponent
					type='number'
					name='salaryTo'
					label='Salary to'
					register={register}
					required
					errors={errors}
					step={SALARY_STEP}
				/>
			</Wrapper>

			<Wrapper>
				<SelectComponent
					name='empType'
					label='Employment type'
					register={register}
					required
					errors={errors}
					options={{ array: EMP_TYPE_OPTIONS }}
				/>

				<SelectComponent
					name='expLvl'
					label='Experience'
					register={register}
					required
					errors={errors}
					options={{
						array: EXP_LVL_OPTIONS.map((lvl) => _.capitalize(lvl)),
					}}
				/>
			</Wrapper>
		</InputsContainer>
	)
}

export default InfoSection

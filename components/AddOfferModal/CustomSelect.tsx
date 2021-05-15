import React from 'react'
import { FIELD_REQUIRED_ERR } from '@/helpers/utils'
import { FormErrors } from '@/types'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputWrapper, Label, StyledSelect, ErrorMessage } from './StyledForm'

type OptionsType<Option = any> = {
	array: Option[] | readonly Option[]
	fn: (option: Option) => JSX.IntrinsicElements['option']
	defaultValue?: string | number
}

type SelectComponentProps = {
	name: string
	label: string
	register: UseFormRegister<FieldValues>
	required?: boolean
	options: OptionsType
	errors: FormErrors
}

function SelectComponent({
	name,
	label,
	register,
	required,
	options,
	errors,
}: SelectComponentProps) {
	const { array, fn, defaultValue } = options

	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledSelect
				id={name}
				{...register(name, {
					required: required ? label + FIELD_REQUIRED_ERR : false,
				})}>
				<option value='' disabled selected hidden aria-label='Default option'>
					{defaultValue || `Select ${name}`}
				</option>
				{array.map(fn)}
			</StyledSelect>

			{errors[name]! && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
		</InputWrapper>
	)
}
SelectComponent.defaultProps = {
	required: false,
}
export default SelectComponent

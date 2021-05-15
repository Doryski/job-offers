import React from 'react'
import { FormErrors } from '@/types'
import {
	VAL_IS_ZERO_ERR,
	VAL_TOO_BIG_ERR,
	FIELD_REQUIRED_ERR,
	EMAIL_REGEX,
	PASSWORD_REGEX,
} from '@/helpers/utils'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputWrapper, Label, StyledInput, ErrorMessage } from './StyledForm'

type InputComponentProps = {
	name: string
	label: string
	register: UseFormRegister<FieldValues>
	required?: boolean
	errors: FormErrors
	type: string
	step?: number
	max?: number
}
export const checkMinValue = (value: number) => value > 0 || VAL_IS_ZERO_ERR
export const checkMaxValue = (value: number) =>
	value < 100000 || VAL_TOO_BIG_ERR

const InputComponent = ({
	name,
	label,
	register,
	required,
	errors,
	type,
	step,
	max,
}: InputComponentProps) => {
	const labelRequired = label + FIELD_REQUIRED_ERR

	const registerNumber = (elName: string) =>
		register(elName, {
			required: labelRequired,
			validate: {
				lessThan: (value: number) => checkMinValue(value),
				moreThan: (value: number) => checkMaxValue(value),
			},
		})

	const registerText = (elName: string) =>
		register(elName, {
			required: required ? labelRequired : false,
		})

	const registerEmail = (elName: string) =>
		register(elName, {
			required: labelRequired,
			pattern: {
				value: EMAIL_REGEX,
				message: 'Email is not valid',
			},
		})

	const registerPassword = (elName: string) =>
		register(elName, {
			required: labelRequired,
			pattern: {
				value: PASSWORD_REGEX,
				message: `Password should contain at least 
			one letter, one number, one special character 
			and have between 8 and 20 characters.`,
			},
		})

	const passRef = (elName: string) => {
		if (type === 'number') return registerNumber(elName)
		if (type === 'email') return registerEmail(elName)
		if (type === 'password') return registerPassword(elName)
		return registerText(elName)
	}

	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput
				id={name}
				maxLength={max}
				type={type === 'email' ? 'text' : type}
				step={step}
				{...passRef(name)}
			/>
			{errors[name]! && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
		</InputWrapper>
	)
}

InputComponent.defaultProps = {
	required: false,
	step: 1,
	max: 120,
}
export default InputComponent

import {
	EMAIL_REGEX,
	PASSWORD_REGEX,
	VAL_IS_ZERO_ERR,
	VAL_TOO_BIG_ERR,
} from '@/utils/vars'
import { InputHTMLAttributes, useCallback } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const checkMinValue = (value: number) => value > 0 || VAL_IS_ZERO_ERR
const checkMaxValue = (value: number) => value < 100000 || VAL_TOO_BIG_ERR

export default function useRegisterInput(
	register: UseFormRegister<FieldValues>,
	required: boolean,
	requiredLabel: string
) {
	const registerNumber = useCallback(
		(inputName: string) =>
			register(inputName, {
				required: requiredLabel,
				validate: {
					lessThan: (value: number) => checkMinValue(value),
					moreThan: (value: number) => checkMaxValue(value),
				},
			}),
		[register, requiredLabel]
	)

	const registerText = useCallback(
		(inputName: string) =>
			register(inputName, {
				required: required ? requiredLabel : false,
			}),
		[register, required, requiredLabel]
	)

	const registerEmail = useCallback(
		(inputName: string) =>
			register(inputName, {
				required: requiredLabel,
				pattern: {
					value: EMAIL_REGEX,
					message: 'Email is not valid',
				},
			}),
		[register, requiredLabel]
	)

	const registerPassword = useCallback(
		(inputName: string) =>
			register(inputName, {
				required: requiredLabel,
				pattern: {
					value: PASSWORD_REGEX,
					message: `Password should contain at least 
                        one letter, one number, one special character 
                        and have between 8 and 20 characters.`,
				},
			}),
		[register, requiredLabel]
	)

	const registerRef = useCallback(
		(
			inputName: string,
			type: InputHTMLAttributes<HTMLInputElement>['type']
		) => {
			if (type === 'number') return registerNumber(inputName)
			if (type === 'email') return registerEmail(inputName)
			if (type === 'password') return registerPassword(inputName)
			return registerText(inputName)
		},
		[registerEmail, registerNumber, registerPassword, registerText]
	)

	return registerRef
}

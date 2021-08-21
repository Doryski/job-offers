import { FormErrors } from '@/types'
import { FIELD_REQUIRED_ERR } from '@/utils/vars'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import useRegisterInput from '@/hooks/useRegisterInput'
import { ErrorMessage } from '@/shared-components/ErrorMessage/styled'
import { InputHTMLAttributes } from 'react'
import { Label, InputWrapper } from '../styled'
import { StyledInput } from './styled'

type InputComponentProps = {
	name: string
	label: string
	register: UseFormRegister<FieldValues>
	required?: boolean
	errors: FormErrors
	type: InputHTMLAttributes<HTMLInputElement>['type']
	step?: InputHTMLAttributes<HTMLInputElement>['step']
	max?: InputHTMLAttributes<HTMLInputElement>['max']
}
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
	const requiredLabel = label + FIELD_REQUIRED_ERR
	const registerRef = useRegisterInput(register, !!required, requiredLabel)

	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput
				id={name}
				max={max}
				type={type === 'email' ? 'text' : type}
				step={step}
				{...registerRef(name, type)}
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

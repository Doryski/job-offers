import { InputWrapper, Label, StyledInput, ErrorMessage } from './StyledForm'
import {
	VAL_IS_ZERO_ERR,
	VAL_TOO_BIG_ERR,
	FIELD_REQUIRED_ERR,
	EMAIL_REGEX,
	PASSWORD_REGEX,
} from '@/helpers/utils'

type InputComponentProps = {
	name: string
	label: string
	register: Function
	required?: boolean
	errors: Record<string, any>
	type: string
	step?: number
	max?: number
}

const InputComponent = ({
	name,
	label,
	register,
	required,
	errors,
	type,
	step,
	max = 120,
}: InputComponentProps) => {
	const checkMinValue = (value: number) => value > 0 || VAL_IS_ZERO_ERR
	const checkMaxValue = (value: number) => value < 100000 || VAL_TOO_BIG_ERR
	const registerNumber = register({
		required: label + FIELD_REQUIRED_ERR,
		validate: {
			lessThan: (value: number) => checkMinValue(value),
			moreThan: (value: number) => checkMaxValue(value),
		},
	})
	const registerText = register({
		required: required ? label + FIELD_REQUIRED_ERR : false,
	})
	const registerEmail = register({
		required: label + FIELD_REQUIRED_ERR,
		pattern: {
			value: EMAIL_REGEX,
			message: 'Email is not valid',
		},
	})
	const registerPassword = register({
		required: label + FIELD_REQUIRED_ERR,
		pattern: {
			value: PASSWORD_REGEX,
			message: `Password should contain at least 
			one letter, one number, one special character 
			and have between 8 and 20 characters.`,
		},
	})
	const passRef = () => {
		if (type === 'number') return registerNumber
		if (type === 'email') return registerEmail
		if (type === 'password') return registerPassword
		return registerText
	}

	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput
				id={name}
				maxLength={max}
				type={type === 'email' ? 'text' : type}
				name={name}
				step={step}
				ref={passRef()}
			/>
			{errors[name] && errors[name].type && (
				<ErrorMessage>{errors[name].message}</ErrorMessage>
			)}
		</InputWrapper>
	)
}

export default InputComponent

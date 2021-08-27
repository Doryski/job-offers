import { FIELD_REQUIRED_ERR } from '@/utils/vars'
import { FormErrors } from '@/types'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '@/shared-components/ErrorMessage/styled'
import { Label, InputWrapper } from '../styled'
import { Select } from './styled'

type OptionsType<Option> = {
	array: Option[]
	fn: (option: Option) => JSX.IntrinsicElements['option']
	defaultValue?: string | number
}

type SelectComponentProps<Option> = {
	name: string
	label: string
	register: UseFormRegister<FieldValues>
	required?: boolean
	options: OptionsType<Option>
	errors: FormErrors
}

function SelectComponent<Option>({
	name,
	label,
	register,
	required,
	options,
	errors,
}: SelectComponentProps<Option>) {
	const { array, fn, defaultValue } = options

	return (
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<Select
				id={name}
				{...register(name, {
					required: required ? label + FIELD_REQUIRED_ERR : false,
				})}>
				<option value='' disabled selected hidden aria-label='Default option'>
					{defaultValue || `Select ${label}`}
				</option>
				{array.map(fn)}
			</Select>

			{errors[name]! && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
		</InputWrapper>
	)
}

SelectComponent.defaultProps = {
	required: false,
}

export default SelectComponent

import { Typography } from '@/shared-components/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import CustomButton from '@/shared-components/CustomButton'
import { useForm } from 'react-hook-form'
import {
	ApplyButtonWrapper,
	CheckboxWrapper,
	ErrorMessage,
} from '@/components/OfferPage/OfferApplySection/styled'
import { LOCATIONS } from '@/utils/vars'
import useCheckbox from '@/hooks/useCheckbox'
import { useState } from 'react'
import InputComponent from '@/components/AddOfferModal/CustomInput'
import SelectComponent from '@/components/AddOfferModal/CustomSelect'
import ClientOnly from '@/shared-components/ClientOnly'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import Center from '@/shared-components/Center/styled'
import post from 'utils/post'
import usePrefetch from '@/hooks/usePrefetch'
import inputProps from 'utils/inputProps'
import { FormWrapper } from '@/shared-components/FormWrapper'

const Signup = () => {
	const { isChecked, handleChange, setIsChecked } = useCheckbox(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setError,
	} = useForm()
	const [processDataError, setProcessDataError] = useState('')
	const [session] = useSession()
	const router = useRouter()
	usePrefetch('/auth/login', router)

	if (session) {
		return (
			<Center height='100vh'>
				You are already signed in... Go to
				<Link href='/'>
					<a>homepage</a>
				</Link>
			</Center>
		)
	}

	const onSubmit = handleSubmit(async data => {
		if (!isChecked) {
			setProcessDataError(`
            You have to agree to 
            process your data in order to create account.`)
			return
		}

		setProcessDataError('')
		const formData: {
			[x: string]: any
		} = { ...data, processData: isChecked }

		const { errorMessage } = await post('/api/auth/signup', formData)

		if (errorMessage) {
			setError('email', {
				type: 'manual',
				message: errorMessage,
			})
			return
		}
		setIsChecked(false)
		reset()
		router.push('/auth/login')
	})
	const formProps = { register, errors }

	return (
		<FormWrapper>
			<form onSubmit={onSubmit}>
				<InputComponent
					type='text'
					{...inputProps('Company Name')}
					{...formProps}
				/>
				<SelectComponent
					options={{
						array: LOCATIONS,
						fn: option => (
							<option key={option} value={option}>
								{option}
							</option>
						),
					}}
					{...inputProps('City')}
					{...formProps}
				/>
				<InputComponent type='text' {...inputProps('Street')} {...formProps} />
				<InputComponent
					type='number'
					{...inputProps('Company Size')}
					{...formProps}
				/>
				<InputComponent type='email' {...inputProps('Email')} {...formProps} />
				<InputComponent
					type='password'
					{...inputProps('Password')}
					{...formProps}
				/>
				<ClientOnly>
					<CheckboxWrapper>
						<Checkbox
							checked={isChecked}
							onChange={handleChange}
							color='secondary'
						/>
						<Typography color='span' fWeight={400}>
							I agree to process my data
						</Typography>
					</CheckboxWrapper>
				</ClientOnly>
				<ErrorMessage>{processDataError}</ErrorMessage>
				<ApplyButtonWrapper justify='space-between'>
					<Link href='/'>
						<a>
							<CustomButton display='flex' padding='.7em 1em' type='button'>
								Cancel
							</CustomButton>
						</a>
					</Link>
					<CustomButton primary display='flex' padding='.7em 1em' type='submit'>
						Create account
					</CustomButton>
				</ApplyButtonWrapper>
			</form>
		</FormWrapper>
	)
}

export default Signup

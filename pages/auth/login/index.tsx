import { ApplyButtonWrapper } from '@/modules/OfferPage/OfferApplySection/styled'
import InputComponent from '@/modules/AddOfferModal/CustomInput'
import CustomButton from '@/shared-components/CustomButton'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import Center from '@/shared-components/Center/styled'
import { HomepageLink } from '@/shared-components/HomepageLink/styled'
import inputProps from 'utils/inputProps'
import { FormWrapper } from '@/shared-components/FormWrapper'
import useBooleanState from '@/hooks/useBooleanState'

const Login = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setError,
	} = useForm()
	const [session] = useSession()
	const [firstLogIn, setFirstLogIn] = useState(false)
	const [isLoggingIn, startLogginIn, stopLogginIn] = useBooleanState(false)

	const onSubmit = handleSubmit(async data => {
		setFirstLogIn(true)
		startLogginIn()
		reset()
		const res = await signIn('credentials', {
			...data,
			redirect: false,
		})
		if (res?.error) {
			stopLogginIn()
			setError('password', {
				type: 'manual',
				message: 'Ups, something went wrong!',
			})
			return
		}
		router.push('/user/profile')
	})

	if (session && !firstLogIn) {
		return (
			<Center height='100vh'>
				<span>You are already signed in... Go to&nbsp;</span>
				<Link href='/'>
					<HomepageLink>homepage</HomepageLink>
				</Link>
			</Center>
		)
	}
	if (isLoggingIn) return <Center height='100vh'>Logging in...</Center>

	const formProps = { register, errors }

	return (
		<FormWrapper>
			<form onSubmit={onSubmit}>
				<InputComponent type='email' {...inputProps('Email')} {...formProps} />
				<InputComponent
					type='password'
					{...inputProps('Password')}
					{...formProps}
				/>
				<ApplyButtonWrapper justify='space-between'>
					<Link href='/'>
						<a>
							<CustomButton display='flex' padding='.5em 1em' type='button'>
								Cancel
							</CustomButton>
						</a>
					</Link>
					<CustomButton primary display='flex' padding='.5em 1em' type='submit'>
						Log in
					</CustomButton>
				</ApplyButtonWrapper>
			</form>
		</FormWrapper>
	)
}

export default Login

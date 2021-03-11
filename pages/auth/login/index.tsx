import InputComponent from '../../../components/AddOfferModal/CustomInput'
import { ApplyButtonWrapper } from '../../../components/OfferPage/OfferApplySection'
import CustomButton from '../../../components/shared/CustomButton'
import { FormWrapper } from '../signup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import Center from '../../../components/shared/Center'
import styled from 'styled-components'

const Login = () => {
	const router = useRouter()
	const { register, handleSubmit, errors, reset, setError } = useForm()
	const [session] = useSession()
	const [firstLogIn, setFirstLogIn] = useState(false)
	const [isLoggingIn, setIsLoggingIn] = useState(false)

	// return error message if wrong credentials were passed
	useEffect(() => {
		if (router.query.error) {
			setError('password', {
				type: 'manual',
				message: 'Ups, something went wrong!',
			})
		}
	}, [router.query])
	const onSubmit = handleSubmit(async (data) => {
		setFirstLogIn(true)
		setIsLoggingIn(true)
		reset()
		await signIn('credentials', {
			...data,
			redirect: false,
			// callbackUrl: window.location.origin,
			// callbackUrl: `${window.location.origin}/user/profile`,
		})
		router.push('/user/profile')
		return
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
	if (isLoggingIn) {
		return <Center height='100vh'>Logging in...</Center>
	}

	return (
		<FormWrapper>
			<form onSubmit={onSubmit}>
				<InputComponent
					type='email'
					name='email'
					label='Email'
					register={register}
					required
					errors={errors}
				/>
				<InputComponent
					type='password'
					name='password'
					label='Password'
					register={register}
					required
					errors={errors}
				/>
				<ApplyButtonWrapper justify='space-between'>
					<Link href='/'>
						<a>
							<CustomButton display='flex' padding='.5em 1em' type='button'>
								Cancel
							</CustomButton>
						</a>
					</Link>
					<CustomButton pink display='flex' padding='.5em 1em' type='submit'>
						Log in
					</CustomButton>
				</ApplyButtonWrapper>
			</form>
		</FormWrapper>
	)
}

export const HomepageLink = styled.a`
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
`
export default Login

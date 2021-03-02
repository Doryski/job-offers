import InputComponent from '../../../components/AddOfferModal/CustomInput'
import { ApplyButtonWrapper } from '../../../components/OfferPage/OfferApplySection'
import CustomButton from '../../../components/shared/CustomButton'
import { FormWrapper } from '../signup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import Center from '../../../components/shared/Center'

const Login = () => {
	const router = useRouter()
	const { register, handleSubmit, errors, reset, setError } = useForm()
	const [session] = useSession()

	// return error message if wrong credentials were passed
	useEffect(() => {
		if (router.query.error) {
			setError('password', {
				type: 'manual',
				message: 'Ups, something went wrong!',
			})
		}
	}, [router])

	// prefetch homepage for newly logged in user
	useEffect(() => {
		router.prefetch('/')
	}, [])

	const onSubmit = handleSubmit(async (data) => {
		await signIn('credentials', {
			...data,
			redirect: false,
			callbackUrl: window.location.origin,
		})
		reset()
		return
	})

	if (session) {
		return (
			<Center height='100vh'>
				You are already signed in... Go to{' '}
				<Link href='/'>
					<a>homepage</a>
				</Link>
			</Center>
		)
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
					<Link href={'/'}>
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

export default Login

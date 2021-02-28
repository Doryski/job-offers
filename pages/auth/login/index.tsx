import InputComponent from '../../../components/AddOfferModal/CustomInput'
import { ApplyButtonWrapper } from '../../../components/OfferPage/OfferApplySection'
import CustomButton from '../../../components/shared/CustomButton'
import { FormWrapper } from '../signup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/client'
import Center from '../../../components/shared/Center'

// const Login = ({ csrfToken }) => {
const Login = () => {
	const router = useRouter()
	const [session] = useSession()
	const { register, handleSubmit, errors, reset, setError } = useForm()

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
		console.log('login data:', data)
		console.log('data:', data)
		const res = await signIn('credentials', {
			...data,
			redirect: false,
			callbackUrl: window.location.origin,
		})
		console.log(res)
		reset()
		return
	})

	if (session) {
		router.push('/')
		return (
			<Center>
				{`You are getting redirected to homepage, 
				as you are already signed in...`}
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

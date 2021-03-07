import Typography from '../../../components/shared/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import CustomButton from '../../../components/shared/CustomButton'
import theme, { textColors } from '../../../theme'
import { useForm } from 'react-hook-form'
import {
	ApplyButtonWrapper,
	CheckboxWrapper,
} from '../../../components/OfferPage/OfferApplySection'
import { LOCATIONS } from '../../../helpers/utils'
import useCheckbox from '../../../hooks/useCheckbox'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import InputComponent from '../../../components/AddOfferModal/CustomInput'
import SelectComponent from '../../../components/AddOfferModal/CustomSelect'
import ClientOnly from '../../../components/shared/ClientOnly'
import { ErrorMessage } from '../../../components/AddOfferModal/StyledForm'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import Center from '../../../components/shared/Center'
import post from '../../../helpers/post'
import usePrefetch from '../../../hooks/usePrefetch'

const Signup = () => {
	const { isChecked, handleChange, setIsChecked } = useCheckbox(false)
	const { register, handleSubmit, errors, reset, setError } = useForm()
	const [processDataError, setProcessDataError] = useState('')
	const [session] = useSession()
	const router = useRouter()

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

	// prefetch login page for newly created user
	usePrefetch('/auth/login')

	const onSubmit = handleSubmit(async (data) => {
		if (!isChecked) {
			setProcessDataError(`
            You have to agree to 
            process your data in order to create account.`)
			return
		}

		setProcessDataError('')
		let formData: {
			[x: string]: any
		} = { ...data, processData: isChecked }

		// post employer to db
		const res = await post('/api/auth/signup', formData)
		const { errorMessage } = res
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
		return
	})

	return (
		<FormWrapper>
			<form onSubmit={onSubmit}>
				<InputComponent
					type='text'
					name='companyName'
					label='Company name'
					register={register}
					required
					errors={errors}
				/>
				<SelectComponent
					name='city'
					label='City'
					register={register}
					required
					errors={errors}
					options={{ array: LOCATIONS }}
				/>
				<InputComponent
					type='text'
					name='street'
					label='Street'
					register={register}
					required
					errors={errors}
				/>
				<InputComponent
					type='number'
					name='companySize'
					label='Company Size'
					register={register}
					required
					errors={errors}
				/>
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
				<ClientOnly>
					<CheckboxWrapper>
						<Checkbox checked={isChecked} onChange={handleChange} />
						<Typography color={textColors.span} fWeight={theme.fontWeight[400]}>
							I agree to process my data
						</Typography>
					</CheckboxWrapper>
				</ClientOnly>
				<ErrorMessage>{processDataError}</ErrorMessage>
				<ApplyButtonWrapper justify='space-between'>
					<Link href={'/'}>
						<a>
							<CustomButton display='flex' padding='.7em 1em' type='button'>
								Cancel
							</CustomButton>
						</a>
					</Link>
					<CustomButton pink display='flex' padding='.7em 1em' type='submit'>
						Create account
					</CustomButton>
				</ApplyButtonWrapper>
			</form>
		</FormWrapper>
	)
}
export const FormWrapper = styled.div`
	width: 50vw;
	height: 100vh;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const FormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
`
export const UploadWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	position: relative;
	width: 100%;
	padding: 20px;
	border: 1px solid;
	border-color: rgb(224, 224, 224);
	border-radius: 5px;
	transition: border-color 300ms ease 0s;
	cursor: pointer;
	min-height: 100px;
	&:hover {
		border-color: ${({ theme }) => theme.colors.pink};
	}
`
export default Signup

// <FormGrid>

// <MyTextField
//     style={{ fontFamily: 'inherit' }}
//     error={!!errors.companyName}
//     id='companyName'
//     name='companyName'
//     label='Company Name'
//     helperText={
//         errors.companyName && (
//             <ErrorMessage>{errors.companyName?.message}</ErrorMessage>
//             )
//         }
//         variant='outlined'
//         InputProps={{
//             startAdornment: <InputIcon Icon={PersonOutline} />,
//         }}
//         inputRef={register({
//             required: 'Company name is a required field',
//         })}
//         />
// <MyTextField
//     error={!!errors.email}
//     id='email'
//     name='email'
//     label='Email'
//     helperText={
//         errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>
//     }
//     variant='outlined'
//     InputProps={{
//         startAdornment: <InputIcon Icon={Email} />,
//     }}
//     inputRef={}
//     />
// <MyTextField
//     id='introduction'
//     name='introduction'
//     label='Introduce yourself (linkedin/github links)'
//     variant='outlined'
//     InputProps={{
//         startAdornment: <InputIcon Icon={Create} />,
//     }}
//     inputRef={register}
//     />
//
// </FormGrid>

{
	/* <UploadWrapper onClick={handleFileUpload}>
					<input
						ref={uploadRef}
						disabled={!!fileName}
						onChange={handleFileChange}
						style={{ display: 'none' }}
						accept='application/jpg'
						type='file'
						autoComplete='off'
						name='cv'
						tabIndex={-1}
					/>
					{!!fileName ? (
						<>
							<div style={{ maxWidth: '210px' }}>
								<Typography
									color={textColors.pink}
									fWeight={theme.fontWeight[500]}
									fontSize={theme.fontSize.md}>
									{fileName}
								</Typography>
							</div>
							<DeleteFileBtn onClick={handleFileDelete}>
								<Typography
									color={textColors.span}
									fWeight={theme.fontWeight[700]}>
									Delete
								</Typography>
								<DeleteOutline />
							</DeleteFileBtn>
						</>
					) : (
						<>
							<UploadIconWrapper>
								<UploadCv />
							</UploadIconWrapper>
							<label htmlFor='cv' style={{ cursor: 'pointer' }}>
								<Typography
									color={textColors.span}
									fWeight={theme.fontWeight[400]}
									fontSize={theme.fontSize.large}
									margin='0 0 0 .5em'>
									Upload company logo (.jpg)
								</Typography>
							</label>
						</>
					)}
				</UploadWrapper> */
}

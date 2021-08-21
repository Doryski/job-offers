import React, { useReducer, useRef } from 'react'
import styled from 'styled-components'
import { PersonOutline, Email, Create, DeleteOutline } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import Typography from '@/shared-components/Typography'
import { TextField, Checkbox } from '@material-ui/core'
import CustomButton from '@/shared-components/CustomButton'
import { initialSubmit, reducer } from 'utils/submitReducer'
import post from 'utils/post'
import { useRouter } from 'next/router'
import useCheckbox from '@/hooks/useCheckbox'
import useFileUpload from '@/hooks/useFileUpload'
import { EMAIL_REGEX } from '@/utils/vars'
import { OfferPageDataType } from '@/types'
import useRefreshPage from '@/hooks/useRefreshPage'
import InputIcon from '../InputIcon'
import { Wrapper } from '../styled'

type FormDataType = {
	name: string
	email: string
	introduction?: string
	processInFuture: 1 | 0
	employerId: string
	offerId: string
}

export const ApplyContainer = styled.section`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`

export const FormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	> div:nth-of-type(odd) {
		margin-right: 0.875em;
	}
	> div:nth-of-type(3),
	div:nth-of-type(4) {
		margin-top: 1em;
	}
	> div:nth-of-type(3) > div {
		min-height: 100px;
	}
`
export const ErrorMessage = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
`
export const UploadWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: calc(((100% - 12px) - 6px) - 8px);
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
		border-color: ${({ theme }) => theme.colors.primary};
	}
`
export const UploadIconWrapper = styled.div`
	> svg {
		width: 50px;
		height: 50px;
	}
`
export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5em;
	margin-left: -0.75em;
`
export const ApplyButtonWrapper = styled.div<{ justify?: string }>`
	display: flex;
	justify-content: ${({ justify }) => justify || 'flex-end'};
`
export const DeleteFileBtn = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	border: none;
	border-radius: 5px;
	background: none;
	right: 0;
	bottom: 0;
	padding: 6px 8px;
	color: ${({ theme }) => theme.colors.span};
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
export const MyTextField = styled(TextField)`
	div > fieldset {
		border-color: rgb(224, 224, 224);
		transition: border-color 300ms ease 0s;
	}
	div:hover > fieldset {
		border-color: ${({ theme }) => theme.colors.primary} !important;
	}
`

const OfferApplySection = ({ offer }: { offer: OfferPageDataType }) => {
	const { employerId, offerId, companyName } = offer
	const { isChecked, handleChange } = useCheckbox(false)
	const uploadRef = useRef<HTMLInputElement>(null!)
	const { fileName, handleFileChange, handleFileDelete } = useFileUpload(
		uploadRef
	)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [submit, dispatch] = useReducer(reducer, initialSubmit)
	const { success, loading } = submit
	const router = useRouter()
	const { refresh } = useRefreshPage(offer, router)

	const onSubmit = handleSubmit(async (data: FormDataType) => {
		dispatch({ type: 'LOADING', payload: true })
		const formData: FormDataType = {
			...data,
			processInFuture: isChecked ? 1 : 0,
			employerId,
			offerId,
		}
		try {
			await post('/api/applicants', formData)
			refresh()
			dispatch({ type: 'SUCCESS', payload: true })
			dispatch({ type: 'LOADING', payload: false })
		} catch (err) {
			dispatch({ type: 'FAILURE', payload: true })
		}
	})

	return (
		<ApplyContainer>
			<Typography
				color='title'
				fWeight={500}
				fontSize='xl'
				align='left'
				margin='0.625em 1.25em'>
				Apply for this job
			</Typography>

			<Wrapper>
				{success ? (
					<div>
						Thank you for your application. Your data was sent to the{' '}
						{companyName}
					</div>
				) : (
					<form style={{ width: '100%' }} onSubmit={onSubmit}>
						<FormGrid>
							<MyTextField
								style={{ fontFamily: 'inherit' }}
								error={!!errors.name}
								id='name'
								label='Name'
								helperText={
									errors.name && (
										<ErrorMessage>{errors.name?.message}</ErrorMessage>
									)
								}
								variant='outlined'
								InputProps={{
									startAdornment: <InputIcon Icon={PersonOutline} />,
								}}
								{...register('name', {
									required: 'Name is a required field',
								})}
							/>
							<MyTextField
								error={!!errors.email}
								id='email'
								label='Email'
								helperText={
									errors.email && (
										<ErrorMessage>{errors.email?.message}</ErrorMessage>
									)
								}
								variant='outlined'
								InputProps={{
									startAdornment: <InputIcon Icon={Email} />,
								}}
								{...register('email', {
									required: 'Email is a required field',
									pattern: {
										value: EMAIL_REGEX,
										message: 'Email is not valid',
									},
								})}
							/>
							<MyTextField
								id='introduction'
								name='introduction'
								label='Introduce yourself (linkedin/github links)'
								variant='outlined'
								InputProps={{
									startAdornment: <InputIcon Icon={Create} />,
								}}
								inputRef={{ ...register('introduction'), current: null }}
							/>
							{/* <UploadWrapper onClick={handleFileUpload}> */}
							<UploadWrapper
								onClick={() => alert('This function is not available yet!')}>
								{fileName ? (
									<>
										<div style={{ maxWidth: '210px' }}>
											<Typography color='primary' fWeight={500} fontSize='md'>
												{fileName}
											</Typography>
										</div>
										<DeleteFileBtn onClick={handleFileDelete}>
											<Typography color='span' fWeight={700}>
												Delete
											</Typography>
											<DeleteOutline />
										</DeleteFileBtn>
									</>
								) : (
									<>
										<UploadIconWrapper>Upload CV icon</UploadIconWrapper>
										<label htmlFor='cv' style={{ cursor: 'pointer' }}>
											<input
												ref={uploadRef}
												disabled={!!fileName}
												onChange={handleFileChange}
												style={{ display: 'none' }}
												accept='application/pdf'
												type='file'
												autoComplete='off'
												name='cv'
												tabIndex={-1}
											/>
											<Typography
												color='span'
												fWeight={400}
												fontSize='large'
												margin='0 0 0 .5em'>
												Upload CV (.pdf)
											</Typography>
										</label>
									</>
								)}
							</UploadWrapper>
						</FormGrid>
						<CheckboxWrapper>
							<Checkbox checked={isChecked} onChange={handleChange} />
							<Typography color='span' fWeight={400}>
								Processing data in future recruitment
							</Typography>
						</CheckboxWrapper>
						<ApplyButtonWrapper>
							<CustomButton
								primary
								display='flex'
								padding='.5em 1.5em'
								type='submit'
								fontSize='large'>
								{loading ? 'Applying...' : 'Apply'}
							</CustomButton>
						</ApplyButtonWrapper>
					</form>
				)}
			</Wrapper>
		</ApplyContainer>
	)
}

export default OfferApplySection

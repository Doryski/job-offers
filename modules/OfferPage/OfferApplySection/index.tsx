import React, { useReducer, useRef } from 'react'
import { PersonOutline, Email, Create, DeleteOutline } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { Typography } from '@/shared-components/Typography'
import { Checkbox } from '@material-ui/core'
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
import {
	ApplyButtonWrapper,
	ApplyContainer,
	CheckboxWrapper,
	DeleteFileBtn,
	ErrorMessage,
	FileName,
	Form,
	FormGrid,
	MyTextField,
	UploadIconWrapper,
	UploadInput,
	UploadLabel,
	UploadWrapper,
} from './styled'

type FormDataType = {
	name: string
	email: string
	introduction?: string
	processInFuture: 1 | 0
	employerId: string
	offerId: string
}

type OfferApplySectionProps = { offer: OfferPageDataType }

const OfferApplySection = ({ offer }: OfferApplySectionProps) => {
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
					<Form onSubmit={onSubmit}>
						<FormGrid>
							<MyTextField
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
								onClick={() =>
									console.warn('This function is not available yet!')
								}>
								{fileName ? (
									<>
										<FileName>
											<Typography color='primary' fWeight={500} fontSize='md'>
												{fileName}
											</Typography>
										</FileName>
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
										<UploadLabel htmlFor='cv'>
											<UploadInput
												ref={uploadRef}
												disabled={!!fileName}
												onChange={handleFileChange}
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
										</UploadLabel>
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
					</Form>
				)}
			</Wrapper>
		</ApplyContainer>
	)
}

export default OfferApplySection

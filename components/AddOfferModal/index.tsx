import React, { useContext, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogHeader from '../shared/DialogHeader'
import InfoSection from './InfoSection'
import TechnologySection from './TechnologySection'
import styled from 'styled-components'
import { Wrapper } from './StyledForm'
import CustomButton from '../shared/CustomButton'
import { AddOfferContext } from './AddOfferContext'
import InputComponent from './CustomInput'

const AddOfferModal = ({ close }: { close: VoidFunction }) => {
	const { register, errors, loading } = useContext(AddOfferContext)
	const [techSize, setTechSize] = useState(1)
	const handleTechSize = {
		add: () => setTechSize((prevTechSize) => prevTechSize + 1),
		remove: () => setTechSize((prevTechSize) => prevTechSize - 1),
	}

	return (
		<Container>
			<DialogHeader close={close}>Add offer</DialogHeader>
			<InfoSection />
			<DialogHeader>Technology</DialogHeader>
			<TechnologySection techSize={techSize} handleTechSize={handleTechSize} />
			<InputComponent
				type='text'
				name='description'
				label='Description'
				register={register}
				required
				errors={errors}
			/>
			<Wrapper>
				<CustomButton type='submit' padding='0.5em 1.125em' pink>
					{loading ? (
						<StyledCircularProgress size='10px' color='secondary' />
					) : (
						'Add offer'
					)}
				</CustomButton>
			</Wrapper>
		</Container>
	)
}

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	padding-bottom: 0.625em;
`
export const StyledCircularProgress = styled(CircularProgress)`
	margin: 0 1.5625em;
`

export default AddOfferModal

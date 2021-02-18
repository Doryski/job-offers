import CustomButton from './CustomButton'
import styled from 'styled-components'
import theme from '../../theme'

type DialogFooterProps = {
	handleReset: Function
	handleApplyFilter: Function
}

const DialogFooter = ({
	handleReset,
	handleApplyFilter,
}: DialogFooterProps) => {
	return (
		<BottomWrapper>
			<a onClick={() => handleReset}>
				<CustomButton padding='0.5em 1.875em'>Clear filters</CustomButton>
			</a>
			<a onClick={() => handleApplyFilter}>
				<CustomButton
					padding='0.5em 1.125em'
					pink
					fWeight={theme.fontWeight[600]}
					margin='0 0.625em'>
					Show offers
				</CustomButton>
			</a>
		</BottomWrapper>
	)
}

export const BottomWrapper = styled.div`
	padding: 0.9375em 1.25em;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export default DialogFooter

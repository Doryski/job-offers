import CustomButton from '../CustomButton'
import { BottomWrapper } from './styled'

type DialogFooterProps = {
	handleReset: (e: any) => void
	handleApplyFilter: (e: any) => void
}

const DialogFooter = ({
	handleReset,
	handleApplyFilter,
}: DialogFooterProps) => (
	<BottomWrapper>
		<button type='button' onClick={handleReset}>
			<CustomButton padding='0.5em 1.875em'>Clear filters</CustomButton>
		</button>
		<button type='button' onClick={handleApplyFilter}>
			<CustomButton
				padding='0.5em 1.125em'
				primary
				fWeight={600}
				margin='0 0.625em'>
				Show offers
			</CustomButton>
		</button>
	</BottomWrapper>
)

export default DialogFooter

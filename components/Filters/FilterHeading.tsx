import Typography from '../shared/Typography'

const FilterHeading = ({ children }) => (
	<Typography
		display='block'
		minWidth='100%'
		color='text'
		fWeight={700}
		align='left'
		margin='1.25em 0'>
		{children}
	</Typography>
)
export default FilterHeading

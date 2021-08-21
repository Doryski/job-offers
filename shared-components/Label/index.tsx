import { ChildrenProp } from 'types/childrenProp'
import { Typography } from '../Typography'
import { Container } from './styled'

type LabelProps = {
	active: boolean
}

const Label = ({ children, active }: LabelProps & ChildrenProp) => (
	<Container active={active}>
		<Typography color='text'>{children}</Typography>
	</Container>
)

export default Label

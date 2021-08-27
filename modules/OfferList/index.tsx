import { ChildrenProp } from 'types/childrenProp'
import { Container, ListContainer } from './styled'

const OfferList = ({ children }: ChildrenProp) => (
	<ListContainer>
		<Container>{children}</Container>
	</ListContainer>
)

export default OfferList

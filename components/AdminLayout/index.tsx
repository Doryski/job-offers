import { ChildrenProp } from 'types/childrenProp'
import Layout from '../Layout'
import LeftNav from './LeftNav'
import { ChildrenWrapper, SubContainer } from './styled'

const AdminLayout = ({ children }: ChildrenProp) => (
	<Layout admin>
		<SubContainer>
			<LeftNav />
			<ChildrenWrapper>{children}</ChildrenWrapper>
		</SubContainer>
	</Layout>
)

export default AdminLayout

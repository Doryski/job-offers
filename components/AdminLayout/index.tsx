import React from 'react'
import Layout from '../Layout'
import LeftNav from './LeftNav'
import { ChildrenWrapper, SubContainer } from './styled'

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
	<Layout admin>
		<SubContainer>
			<LeftNav />
			<ChildrenWrapper>{children}</ChildrenWrapper>
		</SubContainer>
	</Layout>
)

export default AdminLayout

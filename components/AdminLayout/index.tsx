import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import LeftNav from './LeftNav'

const SubContainer = styled.div`
	display: grid;
	grid-template-columns: 10vw 90vw;
	height: 100%;
`
const ChildrenWrapper = styled.div`
	background-color: lightcyan;
`

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
	<Layout admin>
		<SubContainer>
			<LeftNav />
			<ChildrenWrapper>{children}</ChildrenWrapper>
		</SubContainer>
	</Layout>
)

export default AdminLayout

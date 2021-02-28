import styled from 'styled-components'
import Layout from '../Layout'
import LeftNav from './LeftNav'

const AdminLayout = ({ children }) => {
	return (
		<Layout admin>
			<SubContainer>
				<LeftNav />
				<ChildrenWrapper>{children}</ChildrenWrapper>
			</SubContainer>
		</Layout>
	)
}

const ChildrenWrapper = styled.div`
	background-color: lightcyan;
`

const SubContainer = styled.div`
	display: grid;
	grid-template-columns: 10vw 90vw;
	height: 100%;
`
export default AdminLayout

import { useSession } from 'next-auth/client'
import Center from '@/shared-components/Center/styled'
import NotAuthorized from '@/modules/AdminLayout/NotAuthorized'
import AdminLayout from '@/modules/AdminLayout'

const AdminPage = () => {
	const [session, loading] = useSession()
	if (loading) return <Center height='100vh'>Loading admin page...</Center>
	if (!session?.user?.admin) return <NotAuthorized />

	return <AdminLayout>Here will be Admin Dashboard</AdminLayout>
}

export default AdminPage

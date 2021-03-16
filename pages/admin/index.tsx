import { useSession } from 'next-auth/client'
import AdminLayout from '@/components/AdminLayout'
import NotAuthorized from '@/components/AdminLayout/NotAuthorized'
import Center from '@/components/shared/Center'

const AdminPage = () => {
	const [session, loading] = useSession()
	if (loading) return <Center height='100vh'>Loading admin page...</Center>
	if (!session?.user?.admin) {
		return <NotAuthorized />
	}
	return <AdminLayout>Here will be Admin Dashboard</AdminLayout>
}

export default AdminPage

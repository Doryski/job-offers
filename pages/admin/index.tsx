import { useSession } from 'next-auth/client'
import AdminLayout from '../../components/AdminLayout'

const AdminPage = () => {
	const [session, loading] = useSession()
	if (loading) return <div>Loading admin page...</div>
	if (!session) return <div>Log in to admin account to see this page.</div>
	// @ts-ignore
	if (!session?.user?.admin)
		return <div>You are not authorized to see this page.</div>
	return <AdminLayout>Here will be Admin Dashboard</AdminLayout>
}

export default AdminPage

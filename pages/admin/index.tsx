import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import AdminLayout from '../../components/AdminLayout'

const AdminPage = () => {
	const [session, loading] = useSession()
	if (loading) return <div>Loading admin page...</div>
	if (!session?.user?.admin) {
		useRouter().push('/')
		return <div>You are not authorized to see this page.</div>
	}
	return <AdminLayout>Here will be Admin Dashboard</AdminLayout>
}

export default AdminPage

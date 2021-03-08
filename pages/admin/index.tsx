import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import AdminLayout from '../../components/AdminLayout'
import Center from '../../components/shared/Center'

const AdminPage = () => {
	const [session, loading] = useSession()
	if (loading) return <Center height='100vh'>Loading admin page...</Center>
	if (!session?.user?.admin) {
		useRouter().push('/')
		return (
			<Center height='100vh'>You are not authorized to see this page.</Center>
		)
	}
	return <AdminLayout>Here will be Admin Dashboard</AdminLayout>
}

export default AdminPage

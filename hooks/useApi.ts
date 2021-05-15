import useSWR from 'swr'
import fetcher from '@/helpers/fetcher'

export default function useApi(url: string | null) {
	const { data, error } = useSWR(url, fetcher)

	return {
		data,
		loading: !error && !data,
		error,
	}
}

import useSWR from 'swr'
import fetcher from '@/helpers/fetcher'

export default function useApi(url: string) {
	const { data, error } = useSWR(url, fetcher)

	return {
		data,
		dataLoading: !error && !data,
		error,
	}
}

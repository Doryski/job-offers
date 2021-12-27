import initialState from '@/hooks/useFormSubmit/initialState'
import reducer from '@/hooks/useFormSubmit/reducer'
import { useReducer } from 'react'
import { FAILURE, LOADING, RESET, SUCCESS } from './actions'

export default function useFormSubmit() {
	const [submit, dispatch] = useReducer(reducer, initialState)

	return {
		loading: submit.loading,
		success: submit.success,
		failure: submit.failure,
		setLoading: (payload: boolean) => dispatch({ type: LOADING, payload }),
		setSuccess: (payload: boolean) => dispatch({ type: SUCCESS, payload }),
		setFailure: (payload: boolean) => dispatch({ type: FAILURE, payload }),
		reset: () => dispatch({ type: RESET }),
	}
}

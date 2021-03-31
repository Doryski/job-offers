type SubmitType = { loading: boolean; success: boolean; failure: boolean }
type SubmitActionType = {
	type: 'LOADING' | 'SUCCESS' | 'FAILURE'
	payload: boolean
}

export const initialSubmit: SubmitType = {
	loading: false,
	success: false,
	failure: false,
}

export const reducer = (
	state: typeof initialSubmit,
	action: SubmitActionType
) => {
	switch (action.type) {
		case 'LOADING':
			return { ...state, loading: action.payload }
		case 'SUCCESS':
			return { ...state, success: action.payload }
		case 'FAILURE':
			return { ...state, failure: action.payload }
		default:
			throw new Error('Unknown submit action')
	}
}

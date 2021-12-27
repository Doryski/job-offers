import { FAILURE, LOADING, RESET, SUCCESS } from './actions'
import { SubmitActionType, SubmitType } from './types'

export default function reducer<T extends SubmitType>(
	state: T,
	action: SubmitActionType
): T {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: action.payload }
		case SUCCESS:
			return { ...state, success: action.payload }
		case FAILURE:
			return { ...state, failure: action.payload }
		case RESET:
			return state
		default:
			throw new Error('Unknown submit action')
	}
}

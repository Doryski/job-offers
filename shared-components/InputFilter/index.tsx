import { useRouter } from 'next/router'
import { Search } from '@material-ui/icons'
import { useRef } from 'react'
import useBoolKeyEvent, { KeyOptions } from '@/hooks/useBoolKeyEvent'
import useSearch from '@/hooks/useSearch'
import { Input, InputWrapper, Button } from './styled'

const InputFilter = () => {
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null!)
	const { handleChange, search } = useSearch(router)

	const enterKeyOptions: KeyOptions = {
		input: [{ name: '/', type: 'key' }],
		action: () => inputRef?.current?.focus(),
	}
	const exitKeyOptions: KeyOptions = {
		input: [
			{ name: 'Escape', type: 'key' },
			{ name: 'Enter', type: 'code' },
		],
		action: () => inputRef?.current?.blur(),
	}

	useBoolKeyEvent(enterKeyOptions, exitKeyOptions)

	return (
		<InputWrapper onClick={() => inputRef?.current?.focus()}>
			<Button>
				<Search />
			</Button>
			<Input
				ref={inputRef}
				type='text'
				placeholder='Search'
				value={search}
				onChange={handleChange}
			/>
		</InputWrapper>
	)
}

export default InputFilter

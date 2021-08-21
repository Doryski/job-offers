import { useRouter } from 'next/router'
import { Search } from '@material-ui/icons'
import { useRef } from 'react'
import useSearch from '@/hooks/useSearch'
import { Input, InputWrapper, Button } from './styled'

const InputFilter = () => {
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null!)
	const { handleChange, search } = useSearch(router)

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

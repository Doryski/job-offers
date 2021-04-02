import { isClient } from '@/helpers/utils'
import { useEffect, useLayoutEffect } from 'react'

const useClientLayoutEffect = isClient ? useLayoutEffect : useEffect
export default useClientLayoutEffect

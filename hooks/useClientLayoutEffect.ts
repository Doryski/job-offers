import { isClient } from '@/utils/vars'
import { useEffect, useLayoutEffect } from 'react'

const useClientLayoutEffect = isClient ? useLayoutEffect : useEffect
export default useClientLayoutEffect

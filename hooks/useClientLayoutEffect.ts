import isClient from '@/utils/isClient'
import { useEffect, useLayoutEffect } from 'react'

const useClientLayoutEffect = isClient ? useLayoutEffect : useEffect
export default useClientLayoutEffect

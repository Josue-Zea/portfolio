import { useEffect, useLayoutEffect } from 'react'

// Hook para evitar errores de hidratación con localStorage
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Hook para verificar si el componente está hidratado
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false)
  
  useIsomorphicLayoutEffect(() => {
    setIsHydrated(true)
  }, [])
  
  return isHydrated
}
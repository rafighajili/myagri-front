import { useRef } from 'react';

function useFallbackRef(ref: any) {
  const newRef = useRef(null);
  return ref || newRef;
}

export { useFallbackRef };

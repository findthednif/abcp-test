import { useCallback, useRef } from "react";

function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const lastCall = useRef<number>(0);

  const throttledCallback = useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);

  return throttledCallback;
}

export default useThrottle;

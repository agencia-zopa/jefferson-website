import { useEffect } from 'react';

export function useWindowEvent(
  event: string,
  onEvent: () => void,
  options?: { initialize?: boolean }
) {
  useEffect(() => {
    window.addEventListener(event, onEvent);
    if (options?.initialize) {
      onEvent();
    }
    return () => window.removeEventListener(event, onEvent);
  }, [event, onEvent, options?.initialize]);
}

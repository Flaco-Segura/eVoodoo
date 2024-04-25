import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';

import { useEventCallback, useEventListener } from 'usehooks-ts';

declare global {
  interface WindowsEventMap {
    'session-storage': CustomEvent;
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  }, [initialValue, key]);
  const [storedValue, setStoredValue] = useState<T>(readValue);
  const setValue: SetValue<T> = useEventCallback((value: any) => {
    if(typeof window === 'undefined') {
      console.warn(
        `Tried setting sessionStorage key "${key} even through environment is not a client"`
      );
    }
    try {
      const newValue = value instanceof Function ? value(storedValue): value;
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event('session-storage'));
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  useEventListener('storage', handleStorageChange);
  useEventListener('session-storage', handleStorageChange);

  return [storedValue, setValue]
}

export default useSessionStorage;

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', {value});
    return undefined;
  }
}

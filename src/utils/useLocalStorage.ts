import { useState, useEffect, useCallback } from 'react';

const useLocalStorage = (key: string, initialValue: string[]) => {
  const [storedValue, setStoredValue] = useState<string[]>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error parsing localStorage item:', error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: string) => {
      try {
        const newValue = [value, ...storedValue].slice(0, 5);
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error('Error setting localStorage item:', error);
      }
    },
    [storedValue, key],
  );

  const removeValue = useCallback(
    (value: string) => {
      try {
        const newValue = storedValue.filter((item) => item !== value);
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error('Error removing localStorage item:', error);
      }
    },
    [storedValue, key],
  );

  const clearStorage = useCallback(() => {
    try {
      setStoredValue(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }, [initialValue, key]);

  return [storedValue, setValue, removeValue, clearStorage] as const;
};

export default useLocalStorage;

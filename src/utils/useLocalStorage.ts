import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string[]) => {
  const [storedValue, setStoredValue] = useState<string[]>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      const newValue = [value, ...storedValue].slice(0, 5);
      setStoredValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = (value: string) => {
    try {
      const newValue = storedValue.filter((item) => item !== value);
      setStoredValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
};

export default useLocalStorage;

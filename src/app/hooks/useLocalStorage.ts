import { useEffect, useState } from "react";

function readStoredValue<T>(key: string, fallbackValue: T): T {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState<T>(() => readStoredValue(key, fallbackValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors and keep in-memory state.
    }
  }, [key, value]);

  return [value, setValue] as const;
}

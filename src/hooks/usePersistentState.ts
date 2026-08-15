import { useEffect, useState } from "react";

/** Persist a value to localStorage whenever it changes */
export const usePersist = <T,>(key: string, value: T): void => {
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write errors (e.g. private browsing or full storage)
    }
  }, [key, value]);
};

/**
 * useState that mirrors its value into localStorage. Reads the stored value
 * once on mount and writes on every change, so user settings survive reloads.
 */
export const usePersistentState = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  usePersist(key, value);

  return [value, setValue] as const;
};

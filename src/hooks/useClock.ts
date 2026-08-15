import { useEffect, useState } from "react";

/** Returns a Date that refreshes every `intervalMs`, for clock displays */
export const useClock = (intervalMs: number): Date => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
};

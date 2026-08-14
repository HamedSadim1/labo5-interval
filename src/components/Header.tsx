import { useState, useEffect } from "react";
import { Clock, Watch } from "lucide-react";
import timeStamp from "time-stamp";

const Header = () => {
  const [now, setNow] = useState(timeStamp("HH:mm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(timeStamp("HH:mm"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-10 flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        <div className="animate-float motion-reduce:animate-none rounded-xl bg-sky-500 p-2.5 shadow-lg shadow-sky-950/40 sm:p-3">
          <Watch className="h-6 w-6 text-white sm:h-7 sm:w-7" />
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Interval Dashboard
          </h1>
          <p className="mt-1 hidden text-sm text-slate-400 sm:block">
            Stopwatch, countdown, interval & focus timers
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2.5">
        <Clock className="h-4 w-4 text-teal-400" />
        <span className="font-mono text-lg font-semibold tabular-nums text-slate-100">
          {now}
        </span>
      </div>
    </header>
  );
};

export default Header;

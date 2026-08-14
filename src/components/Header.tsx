import { Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="animate-float motion-reduce:animate-none rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-violet-600 p-2.5 shadow-lg shadow-indigo-950/40 ring-1 ring-white/20 sm:p-3">
          <Clock className="h-6 w-6 text-white sm:h-7 sm:w-7" />
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Interval Dashboard
          </h1>
          <p className="mt-1 hidden text-sm text-slate-400 sm:block">
            Stopwatch, countdown, interval & pomodoro timers
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

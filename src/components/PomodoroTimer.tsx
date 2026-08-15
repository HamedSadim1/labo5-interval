import { Brain } from "lucide-react";
import { usePomodoroTimer } from "@/hooks/usePomodoroTimer";
import { usePersistentState } from "@/hooks/usePersistentState";
import {
  COPY,
  FOCUS_DEFAULT_BREAK_MINUTES,
  FOCUS_DEFAULT_WORK_MINUTES,
  FOCUS_MAX_MINUTES,
  FOCUS_MIN_MINUTES,
  SECONDS_PER_MINUTE,
  STORAGE_KEYS,
} from "@/config";
import { clamp, progressRatio } from "@/utils";
import { NumberField } from "./NumberField";
import { TimerCard } from "./TimerCard";

const PomodoroTimer = () => {
  const [workMinutes, setWorkMinutes] = usePersistentState(
    STORAGE_KEYS.pomodoroWorkMinutes,
    FOCUS_DEFAULT_WORK_MINUTES
  );
  const [breakMinutes, setBreakMinutes] = usePersistentState(
    STORAGE_KEYS.pomodoroBreakMinutes,
    FOCUS_DEFAULT_BREAK_MINUTES
  );

  const clampMinutes = (value: number) =>
    clamp(value, FOCUS_MIN_MINUTES, FOCUS_MAX_MINUTES);

  const workSeconds = clampMinutes(workMinutes) * SECONDS_PER_MINUTE;
  const breakSeconds = clampMinutes(breakMinutes) * SECONDS_PER_MINUTE;

  const { timeLeft, isRunning, mode, cycles, duration, start, stop, reset } =
    usePomodoroTimer(workSeconds, breakSeconds);

  const isWork = mode === "work";

  return (
    <TimerCard
      icon={Brain}
      ringLabel={COPY.rings.timeRemaining}
      progress={progressRatio(timeLeft, duration)}
      timeValue={timeLeft}
      running={isRunning}
      status={
        <span className="text-slate-400">
          <span
            className={
              isWork
                ? "font-medium text-violet-300"
                : "font-medium text-emerald-300"
            }
          >
            {isWork ? COPY.status.workSession : COPY.status.breakSession}
          </span>
          {" · "}
          {COPY.status.cyclesCompleted(cycles)}
        </span>
      }
      input={
        <>
          <NumberField
            id="pomodoro-work"
            label={COPY.fields.pomodoroWorkMinutes}
            value={workMinutes}
            onChange={(value) => setWorkMinutes(clampMinutes(value))}
            disabled={isRunning}
            min={FOCUS_MIN_MINUTES}
            max={FOCUS_MAX_MINUTES}
            focusColor="violet"
          />
          <NumberField
            id="pomodoro-break"
            label={COPY.fields.pomodoroBreakMinutes}
            value={breakMinutes}
            onChange={(value) => setBreakMinutes(clampMinutes(value))}
            disabled={isRunning}
            min={FOCUS_MIN_MINUTES}
            max={FOCUS_MAX_MINUTES}
            focusColor="violet"
          />
        </>
      }
      onStart={start}
      onPause={stop}
      onReset={reset}
    />
  );
};

export default PomodoroTimer;

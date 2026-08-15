import Timer from "./Timer";
import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import CountdownTimer from "./CountdownTimer";
import IntervalTimer from "./IntervalTimer";
import PomodoroTimer from "./PomodoroTimer";
import { Card } from "./Card";

const items = [
  { label: "Stopwatch", node: <Timer /> },
  { label: "Countdown Timer", node: <CountdownTimer /> },
  { label: "Interval Timer", node: <IntervalTimer /> },
  { label: "Focus Time", node: <PomodoroTimer /> },
  { label: "Current Time", node: <CurrentTime /> },
  { label: "Random Values", node: <RandomValue /> },
];

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {items.map((item, index) => (
        <Card
          key={index}
          label={item.label}
          className="animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          {item.node}
        </Card>
      ))}
    </div>
  );
};

export default DashboardGrid;

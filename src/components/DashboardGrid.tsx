import Timer from "./Timer";
import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import CountdownTimer from "./CountdownTimer";
import IntervalTimer from "./IntervalTimer";
import PomodoroTimer from "./PomodoroTimer";
import { Card } from "./Card";

const items = [
  <Timer />,
  <CountdownTimer />,
  <IntervalTimer />,
  <PomodoroTimer />,
  <CurrentTime />,
  <RandomValue />,
];

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((node, index) => (
        <Card
          key={index}
          className="animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          {node}
        </Card>
      ))}
    </div>
  );
};

export default DashboardGrid;

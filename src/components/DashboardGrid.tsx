import Timer from "./Timer";
import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";
import CountdownTimer from "./CountdownTimer";
import IntervalTimer from "./IntervalTimer";
import PomodoroTimer from "./PomodoroTimer";
import { Card } from "./Card";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
      <Card>
        <Timer />
      </Card>
      <Card>
        <CountdownTimer />
      </Card>
      <Card>
        <IntervalTimer />
      </Card>
      <Card>
        <PomodoroTimer />
      </Card>
      <Card>
        <CurrentTime />
      </Card>
      <Card>
        <RandomValue />
      </Card>
    </div>
  );
};

export default DashboardGrid;

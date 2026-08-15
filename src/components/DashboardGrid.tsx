import { Card } from "./Card";
import { CARDS } from "../cards";
import { ANIMATION_DELAY_STEP_MS } from "../config";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {CARDS.map(({ label, accent, Component }, index) => (
        <Card
          key={label}
          label={label}
          className="animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: `${index * ANIMATION_DELAY_STEP_MS}ms` }}
        >
          <Component label={label} accent={accent} />
        </Card>
      ))}
    </div>
  );
};

export default DashboardGrid;

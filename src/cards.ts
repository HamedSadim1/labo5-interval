import { ComponentType } from "react";
import Timer from "./components/Timer";
import CountdownTimer from "./components/CountdownTimer";
import IntervalTimer from "./components/IntervalTimer";
import PomodoroTimer from "./components/PomodoroTimer";
import CurrentTime from "./components/CurrentTime";
import RandomValue from "./components/RandomValue";
import { CARD_LABELS } from "./config";
import { AccentName } from "./theme";

export interface CardDefinition {
  label: string;
  color: AccentName;
  Component: ComponentType;
}

/** Single source of truth for the dashboard cards: labels, colors, widgets */
export const CARDS: CardDefinition[] = [
  { label: CARD_LABELS.stopwatch, color: "sky", Component: Timer },
  { label: CARD_LABELS.countdown, color: "amber", Component: CountdownTimer },
  { label: CARD_LABELS.interval, color: "orange", Component: IntervalTimer },
  { label: CARD_LABELS.focus, color: "violet", Component: PomodoroTimer },
  { label: CARD_LABELS.currentTime, color: "teal", Component: CurrentTime },
  { label: CARD_LABELS.random, color: "rose", Component: RandomValue },
];

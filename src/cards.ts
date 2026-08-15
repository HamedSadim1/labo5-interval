import { ComponentType } from "react";
import Timer from "./components/Timer";
import CountdownTimer from "./components/CountdownTimer";
import IntervalTimer from "./components/IntervalTimer";
import PomodoroTimer from "./components/PomodoroTimer";
import CurrentTime from "./components/CurrentTime";
import RandomValue from "./components/RandomValue";
import { CARD_LABELS, CardWidgetProps } from "./config";

export interface CardDefinition {
  label: string;
  accent: string;
  Component: ComponentType<CardWidgetProps>;
}

/** Single source of truth for the dashboard cards: labels, accent colors, widgets */
export const CARDS: CardDefinition[] = [
  { label: CARD_LABELS.stopwatch, accent: "text-sky-400", Component: Timer },
  { label: CARD_LABELS.countdown, accent: "text-amber-400", Component: CountdownTimer },
  { label: CARD_LABELS.interval, accent: "text-orange-400", Component: IntervalTimer },
  { label: CARD_LABELS.focus, accent: "text-violet-400", Component: PomodoroTimer },
  { label: CARD_LABELS.currentTime, accent: "text-teal-400", Component: CurrentTime },
  { label: CARD_LABELS.random, accent: "text-rose-400", Component: RandomValue },
];

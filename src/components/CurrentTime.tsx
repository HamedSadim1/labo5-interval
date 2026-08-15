import timeStamp from "time-stamp";
import { Clock } from "lucide-react";
import { COPY, MS_PER_SECOND, TIME_FORMAT_HHMMSS } from "@/config";
import { progressInMinute } from "@/utils";
import { TEXT_MUTED } from "@/theme";
import { useClock } from "@/hooks/useClock";
import { useCard } from "./CardContext";
import { ProgressRing } from "./ProgressRing";
import { TitleWithIcon } from "./TitleWithIcon";
import { TimeDisplay } from "./TimeDisplay";

const CurrentTime = () => {
  const { label, accent } = useCard();
  const now = useClock(MS_PER_SECOND);

  return (
    <div>
      <TitleWithIcon icon={Clock} iconColor={accent}>
        {label}
      </TitleWithIcon>
      <ProgressRing
        progress={progressInMinute(now.getSeconds())}
        className={accent}
        label={COPY.rings.secondsInMinute}
      >
        <TimeDisplay text={timeStamp(TIME_FORMAT_HHMMSS, now)} />
      </ProgressRing>
      <p className={`mt-6 text-center text-sm ${TEXT_MUTED}`}>
        {COPY.fields.localTime}
      </p>
    </div>
  );
};

export default CurrentTime;

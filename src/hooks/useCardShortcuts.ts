import { RefObject, useEffect } from "react";

interface CardShortcutHandlers {
  /** Start or pause, depending on the card's running state */
  toggle: () => void;
  /** Reset the timer */
  reset: () => void;
}

/**
 * Space toggles start/pause and R resets — but only when focus is inside the
 * referenced card. Interactive elements (buttons, inputs) keep their native
 * keyboard behavior, so typing in a field never triggers a shortcut.
 */
export const useCardShortcuts = (
  ref: RefObject<HTMLElement | null>,
  { toggle, reset }: CardShortcutHandlers
) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const card = ref.current;
      if (!card || !card.contains(document.activeElement)) return;

      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        toggle();
      } else if (event.key.toLowerCase() === "r") {
        reset();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ref, toggle, reset]);
};

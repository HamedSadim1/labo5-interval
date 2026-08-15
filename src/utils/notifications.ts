import { playAlert, unlockAudio } from "./sound";

export const requestNotificationPermission = () => {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
};

export const showNotification = (title: string, body: string) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
};

/** Fire the completion chime and a system notification together */
export const notifyWithSound = (title: string, body: string): void => {
  playAlert();
  showNotification(title, body);
};

/** Request notification permission and unlock audio, then run the given start action */
export const startWithPermission = (start: () => void): void => {
  requestNotificationPermission();
  unlockAudio();
  start();
};

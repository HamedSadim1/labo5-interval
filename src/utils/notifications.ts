import { playAlert, unlockAudio } from "./sound";

const isNotificationSupported = () => "Notification" in window;

export const requestNotificationPermission = () => {
  if (isNotificationSupported() && Notification.permission === "default") {
    Notification.requestPermission();
  }
};

export const showNotification = (title: string, body: string) => {
  if (isNotificationSupported() && Notification.permission === "granted") {
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

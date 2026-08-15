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

/** Request notification permission, then run the given start action */
export const startWithPermission = (start: () => void): void => {
  requestNotificationPermission();
  start();
};

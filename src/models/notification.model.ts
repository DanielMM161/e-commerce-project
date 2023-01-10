
export interface INotification {
  show: boolean
  message: string
  error: boolean
}

export interface INotificationPayload {
  message: string,
  error: boolean
}

export const notificationInitialState: INotification = {
  show: false,
  message: "",
  error: false
}
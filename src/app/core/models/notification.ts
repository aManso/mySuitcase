
interface NotificationAction {
  action: string,
  icon?: string,
  title: string,
}

export interface Notification {
  title: string,
  body: string, 
  icon: string,
  data?: {
    primaryKey: number,
    dateOfArrival: Date,
  }
  actions: NotificationAction[],
}

export interface NotificationOutput {
  list: Notification[];
}

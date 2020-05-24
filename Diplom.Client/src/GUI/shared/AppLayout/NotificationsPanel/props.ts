import SiteNotification from "../../../../shared/models/notification/SiteNotification";

export interface INotificationsPanelProps {
  open: boolean;
  notifications: SiteNotification[];
}

export interface INotificationsPanelCallProps {
  loadNotifications: () => void;
  close: () => void;
}

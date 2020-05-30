import { connect } from "react-redux";
import {
  INotificationsPanelProps,
  INotificationsPanelCallProps,
} from "./props";
import { RootState } from "../../../../logic/reducers/rootReducer";
import NotificationsPanel from "./NotificationsPanel";
import { Dispatch } from "redux";
import Selectors from "../../../../logic/selectors/selectors";
import Actions from "../../../../logic/actions/actions";

type ContainerProps = Pick<
  INotificationsPanelProps & INotificationsPanelCallProps,
  "open" | "close" | "notifications"
>;

const mapStateToProps = (
  state: RootState
): Omit<INotificationsPanelProps, keyof ContainerProps> => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch
): Omit<INotificationsPanelCallProps, keyof ContainerProps> => {
  return {
    loadNotifications: () => dispatch(Actions.loadSiteNotifications()),
    setNotificationsWasOpened: (ids: number[]) =>
      dispatch(Actions.updateNotificationsOpenedStatus(ids)),
  };
};

const NotificationsPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsPanel);

export default NotificationsPanelContainer;

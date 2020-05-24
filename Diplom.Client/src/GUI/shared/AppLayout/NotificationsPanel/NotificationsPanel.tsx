import React, { FunctionComponent, useEffect } from "react";
import {
  INotificationsPanelProps,
  INotificationsPanelCallProps,
} from "./props";
import createStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import moment from "moment";

export const NotificationsPanel: FunctionComponent<
  INotificationsPanelProps & INotificationsPanelCallProps
> = (props) => {
  const { open, notifications, loadNotifications, close } = props;

  const classes = createStyles(notifications);

  useEffect(() => {
    loadNotifications();
  }, []);

  const renderNotificationsList = (): JSX.Element | JSX.Element[] => {
    if (!notifications.length) {
      return <>Notifications</>;
    }

    return notifications.map((n) => (
      <>
        <Grid className={classes.notificationBlock}>
          <Typography className={classes.firstInfoRow}>
            <Link
              to={`/user/${n.producerId}`}
              className={classes.name}
              onClick={close}
            >
              {n.producerName}
            </Link>{" "}
            publish
          </Typography>
          <Typography>
            <Link
              to={`/answerQuiz/${n.quizId}`}
              className={classes.secondInfoRow}
              onClick={close}
            >
              {n.quizTitle}
            </Link>
          </Typography>
          <Typography>
            {moment(n.dateCreated).format("DD.MM.YYYY hh:mm:ss")}
          </Typography>
        </Grid>
        <Divider />
      </>
    ));
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <Container className={classes.container}>
        {renderNotificationsList()}
      </Container>
    </Drawer>
  );
};

export default NotificationsPanel;

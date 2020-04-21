import React, { FunctionComponent, Children, useState, useEffect } from "react";
import createStyles from "./styles";
import { IActivationFieldProps, IActivationFieldCallProps } from "./props";
import Grid from "@material-ui/core/Grid";
import BlockIcon from "@material-ui/icons/Block";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const ActivationField: FunctionComponent<
  IActivationFieldProps & IActivationFieldCallProps
> = (props) => {
  const { children, getFieldValue, unregisterField, change } = props;
  const fieldProps: any = (children as any).props;

  const classes = createStyles();

  const [active, setActive] = useState(false);

  const [lastValue, setLastValue] = useState(null);

  useEffect(() => {
    if (fieldProps.name != "age") {
      change(fieldProps.name, null);
    }
  }, []);

  const toggleActive = () => {
    if (active) {
      setLastValue(getFieldValue(fieldProps.name));
      unregisterField(fieldProps.name);
      change(fieldProps.name, null);
    } else {
      lastValue !== null && change(fieldProps.name, lastValue);
    }
    setActive(!active);
  };

  return (
    <Grid container alignItems="center" justify="space-between" wrap="nowrap">
      {!active && <Typography>{fieldProps.label}</Typography>}
      <Grid style={{ display: active ? "flex" : "none", flexGrow: 1 }}>
        {children}
      </Grid>
      <Grid>
        {active ? (
          <Tooltip title="Убрать">
            <IconButton onClick={toggleActive}>
              <BlockIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Добавить">
            <IconButton onClick={toggleActive}>
              <FlashOnIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  );
};

export default ActivationField;

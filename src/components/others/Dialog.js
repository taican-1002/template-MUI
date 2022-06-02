import React from "react";

import { Dialog, Slide, Button, Box, MenuItem } from "@mui/material";
import { ButtonContained, ButtonNoneContained } from "./Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogComponent = ({
  button,
  menuItem,
  noContained,
  children,
  buttonChild,
  disabled,
  icon,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {button ? (
        noContained ? (
          <ButtonNoneContained
            variant="outlined"
            color="primary"
            href="#"
            onClick={handleClickOpen}
            icon={icon}
            disabled={disabled ? disabled : null}
          >
            {button}
          </ButtonNoneContained>
        ) : (
          <ButtonContained
            variant="outlined"
            color="primary"
            href="#"
            onClick={handleClickOpen}
            icon={icon}
            size="medium"
            disabled={disabled ? disabled : null}
          >
            {button}
          </ButtonContained>
        )
      ) : (
        <MenuItem onClick={handleClickOpen}>{menuItem}</MenuItem>
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {children}
        <Box onClick={handleClose}>{buttonChild}</Box>
      </Dialog>
    </div>
  );
};

export default DialogComponent;

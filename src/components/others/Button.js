import React from "react";
import { Button } from "@mui/material";

export const ButtonNoneContained = ({ icon, children, onClick }) => {
  return (
    <Button startIcon={icon} className="btn-nocontained" onClick={onClick}>
      {children}
    </Button>
  );
};
export const ButtonContained = ({
  icon,
  children,
  disabled,
  onClick,
  color,
  size,
}) => {
  return (
    <Button
      variant="contained"
      className="btn-contained"
      size={size}
      color={color}
      startIcon={icon}
      disabled={disabled ? disabled : null}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

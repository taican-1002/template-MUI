import React from "react";
import { TextField } from "@mui/material";

const TextFieldComponent = ({ children, type, label, select }) => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <TextField
      id="outlined-select-currency"
      className={select ? "text-field" : ""}
      select={select ? select : null}
      focused
      type={type}
      label={label}
      value={state}
      onChange={handleChange}
      sx={{ width: "100%" }}
    >
      {children}
    </TextField>
  );
};

export default TextFieldComponent;

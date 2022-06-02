import * as React from "react";

import {
  Typography,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import DialogComponent from "./others/Dialog";
import Title from "./Title";

const btn = ["Disagree", "Agree"];

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>

      <DialogComponent
        button="View balance"
        buttonChild={btn.map((e, i) => (
          <Button key={i} sx={{ float: "right" }}>
            {e}
          </Button>
        ))}
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </DialogComponent>
    </React.Fragment>
  );
}

import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  FormControl,
  TextField,
  MenuItem,
} from "@mui/material";
import {
  Email,
  CloudUpload,
  Delete,
  AvTimer,
  Article,
  ExpandMore,
  AccountCircle,
} from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import TextFieldComponent from "../components/others/TextField";
import DialogComponent from "../components/others/Dialog";
import TableDataGrid from "./TableDataGrid";

const mdTheme = createTheme();

const customersList = [
  {
    name: "Admin",
    icon: <AccountCircle />,
  },
  {
    name: "User",
    icon: <AccountCircle />,
  },
];

const customersStatus = [
  {
    status: "Active",
  },
  {
    status: "Invited",
  },
  {
    status: "Waiting for Permissions",
  },
];

const Customers = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "100%" }}>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <Paper className="customers-paper">
                <Typography variant="h6" component="h6" sx={{ pb: 2 }}>
                  Customers
                </Typography>
                <Stack className="customers-actions">
                  <DialogComponent icon={<Email />} button="Invite">
                    <>alo</>
                  </DialogComponent>
                  <DialogComponent icon={<CloudUpload />} button="Import">
                    <>alo</>
                  </DialogComponent>
                  <DialogComponent icon={<Delete />} button="Delete" disabled>
                    <>alo</>
                  </DialogComponent>
                  <DialogComponent
                    icon={<AvTimer />}
                    noContained
                    button="Audit Logs"
                  >
                    <>alo</>
                  </DialogComponent>
                  <DialogComponent
                    icon={<Article />}
                    noContained
                    button="Export to excel"
                  >
                    <>alo</>
                  </DialogComponent>
                </Stack>
                <Box className="form-filter">
                  <Accordion className="form-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Filter</Typography>
                    </AccordionSummary>
                    <FormControl variant="standard" className="form-customers">
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                          <TextFieldComponent
                            label="Email"
                            type="email"
                          ></TextFieldComponent>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <TextFieldComponent label="Name"></TextFieldComponent>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <TextFieldComponent select label="Role">
                            {customersList.map((e, i) => (
                              <MenuItem key={i} value={e.name}>
                                {e.icon} &nbsp; {e.name}
                              </MenuItem>
                            ))}
                          </TextFieldComponent>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <TextFieldComponent select label="Status">
                            {customersStatus.map((e, i) => (
                              <MenuItem key={i} value={e.status}>
                                {e.status}
                              </MenuItem>
                            ))}
                          </TextFieldComponent>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Accordion>
                </Box>
                <Box className="customers-table" sx={{ marginTop: "40px" }}>
                  <TableDataGrid />
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Customers;

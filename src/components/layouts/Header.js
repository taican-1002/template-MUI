import * as React from "react";

import MenuComponent, { MenuFlex } from "../others/Menu";
import DialogComponent from "../others/Dialog";
import { ButtonContained } from "../others/Button";

import {
  AppBar,
  Avatar,
  MenuItem,
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  Badge,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Drawer,
  List,
  TextField,
  Divider,
} from "@mui/material";
import { Menu, ChevronLeft, Notifications, Circle } from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";

import { drawerMenu, drawerMenuSave } from "../../api/headerApi";

const Header = () => {
  const [user, setUser] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [colorChange, setColorChange] = React.useState("#1976d2");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = drawerMenu.findIndex((e) => e.path === pathname);

  const lastPath = pathname.split("/")[1];
  const capitalizePath = lastPath.charAt(0).toUpperCase() + lastPath.slice(1);

  const listColor = [
    {
      name: "default",
      color: "#1976d2",
    },
    {
      name: "dark",
      color: "#000",
    },
    {
      name: "green",
      color: "#26aa80",
    },
    {
      name: "purple",
      color: "#7521d8",
    },
    {
      name: "pink",
      color: "#f431c6",
    },
    {
      name: "red",
      color: "#f4313e",
    },
  ];

  /**Logout */
  const handleLogout = () => {
    // toast.success("Logout success");

    // localStorage.removeItem("userMUI");
    navigate("/");
  };

  /**Upload image avatar */
  function previewFile() {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      setUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUrl("");
    }
  }

  React.useEffect(() => {
    const checkLogin = JSON.parse(localStorage.getItem("userMUI"));
    setUser(checkLogin);
  }, []);

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="absolute"
        open={open}
        sx={{ backgroundColor: `${colorChange}` }}
      >
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>

          {/*Notifications */}
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              {capitalizePath}
            </Typography>
            <MenuComponent
              button={
                <Badge badgeContent={4} color="secondary">
                  <Notifications />
                </Badge>
              }
            >
              <MenuItem>badge</MenuItem>
            </MenuComponent>

            {/* Change bg color */}
            <MenuFlex button="Change Background">
              {listColor.map((e, i) => (
                <MenuItem key={i} onClick={() => setColorChange(e.color)}>
                  <Circle
                    className="change-color"
                    sx={{
                      color: `${e.color}`,
                      border: "1px solid #ccc",
                      borderRadius: "100px",
                    }}
                  />
                </MenuItem>
              ))}
            </MenuFlex>
          </Box>

          {/*Avatar */}
          <MenuComponent
            button={
              <Avatar
                alt="Remy Sharp"
                src={url}
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  border: "3px solid #f1f1f1",
                }}
              />
            }
          >
            <DialogComponent menuItem="Change Avatar">
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="file"
                onChange={previewFile}
              />
            </DialogComponent>
          </MenuComponent>

          {/*Btn Login Logout */}
          <ButtonContained variant="contained" size="small" color="success">
            <MenuItem
              onClick={handleLogout}
              sx={{ color: "#fff", textDecoration: "none" }}
            >
              {user ? "Logout" : "Login"}
            </MenuItem>
          </ButtonContained>
        </Toolbar>
      </AppBar>

      {/*Drawer Menu */}
      <Drawer onClose={() => setOpen(false)} open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {drawerMenu.map((e, i) => (
            <ListItemButton
              className="list-item"
              key={i}
              onClick={() => {
                navigate(e.path);
                setOpen(false);
              }}
            >
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText
                primary={e.name}
                className={`${i === active ? "active" : ""}`}
              />
            </ListItemButton>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div" inset>
            Saved reports
          </ListSubheader>
          {drawerMenuSave.map((e, i) => (
            <ListItemButton key={i}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;

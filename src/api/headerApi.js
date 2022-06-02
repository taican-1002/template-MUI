import {
  Dashboard,
  ShoppingCart,
  People,
  BarChart,
  Layers,
  Assignment,
} from "@mui/icons-material";

export const drawerMenu = [
  {
    icon: <Dashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <ShoppingCart />,
    name: "Orders",
    path: "/orders",
  },
  {
    icon: <People />,
    name: "Customers",
    path: "/customers",
  },
  {
    icon: <BarChart />,
    name: "Reports",
    path: "/reports",
  },
  {
    icon: <Layers />,
    name: "Integrations",
    path: "/integrations",
  },
];

export const drawerMenuSave = [
  {
    icon: <Assignment />,
    name: "Current month",
  },
  {
    icon: <Assignment />,
    name: "Last quarter",
  },
  {
    icon: <Assignment />,
    name: "Year-end sale",
  },
];

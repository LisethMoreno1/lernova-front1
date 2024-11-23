import {
    Assessment,
    CalendarToday,
    Dashboard,
    Hotel,
    Inventory,
    People,
    Receipt,
    Settings,
} from "@mui/icons-material";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const menuItems = [
  { text: "Inicio", icon: <Dashboard /> },
  { text: "Reservas", icon: <CalendarToday /> },
  { text: "Habitaciones", icon: <Hotel /> },
  { text: "Clientes", icon: <People /> },
  { text: "Facturación", icon: <Receipt /> },
  { text: "Inventario", icon: <Inventory /> },
  { text: "Reportes", icon: <Assessment /> },
  { text: "Configuración", icon: <Settings /> },
];

const Sidebar: React.FC = () => {
  return (
    <StyledDrawer variant="permanent">
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;

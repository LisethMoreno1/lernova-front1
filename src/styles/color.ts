import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800", // Naranja
    },
    secondary: {
      main: "#9E9E9E", // Gris
    },
    background: {
      default: "#F5F5F5", // Blanco grisáceo
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dashboard from "./modules/components/dashboard";
import Header from "./modules/components/header";
import Sidebar from "./modules/components/siderbar";

const theme = createTheme({
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Box sx={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
            <Dashboard />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

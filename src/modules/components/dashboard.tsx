import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const occupancyData = [
  { name: "Semana 1", ocupacion: 75 },
  { name: "Semana 2", ocupacion: 82 },
  { name: "Semana 3", ocupacion: 90 },
  { name: "Semana 4", ocupacion: 88 },
];

const incomeData = [
  { name: "Habitaciones", value: 60 },
  { name: "Restaurante", value: 25 },
  { name: "Servicios", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}
        >
          <Typography variant="h6" gutterBottom>
            Métricas Clave
          </Typography>
          <Typography variant="h4">85%</Typography>
          <Typography color="textSecondary">Ocupación Actual</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            $120,000
          </Typography>
          <Typography color="textSecondary">Ingresos del Mes</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}
        >
          <Typography variant="h6" gutterBottom>
            Ocupación por Semana
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={occupancyData}>
              <Bar dataKey="ocupacion" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}
        >
          <Typography variant="h6" gutterBottom>
            Ingresos por Categoría
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={incomeData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {incomeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" gutterBottom>
            Actividad Reciente
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Nueva reserva: Habitación 301"
                secondary="Hace 5 minutos"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Cancelación: Habitación 205"
                secondary="Hace 30 minutos"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Check-in: Sr. García"
                secondary="Hace 1 hora"
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" gutterBottom>
            Acciones Rápidas
          </Typography>
          <Button variant="contained" color="primary" sx={{ mb: 1 }}>
            Nueva Reserva
          </Button>
          <Button variant="contained" color="secondary" sx={{ mb: 1 }}>
            Consultar Disponibilidad
          </Button>
          <Button variant="contained">Crear Factura</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

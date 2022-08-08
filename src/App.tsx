import React from "react";
import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    
  // define theme
  const theme = createTheme({
    typography: {
      h3: {
        color: 'whitesmoke'
      }
    },
    palette: {
      primary: {
        main: '#0e0e0e',
        dark: '#0c0c0c',
        contrastText: "#FFF",
      },
      secondary: {
        main: '#479dde',
        contrastText: 'rgba(8,8,8,0.87)',
      },
      background: {
        default: '#2d2d2d',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
        <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
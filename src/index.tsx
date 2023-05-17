import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: "#222222" } }} />
      <Navbar />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

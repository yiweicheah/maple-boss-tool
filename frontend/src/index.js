import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App";

const theme = createTheme({
  cursorType: "pointer",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={theme}>
    <Notifications zIndex="1000" />
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </MantineProvider>
);

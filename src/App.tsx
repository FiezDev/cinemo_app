import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import store from "./store";
import { theme } from "./theme/muiThemes";
import AppContent from "./Appcontent";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import "@fontsource/roboto";
import mainTheme from "./styles/mainTheme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />ç
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

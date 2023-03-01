import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {
  ExtendedPropsWithChildren,
  ExtendedRenderOptions,
} from "./types/types";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../store/user/userSlice";
import { UIReducer } from "../../../store/UI/UISlice";
import { gameReducer } from "../../../store/games/gamesSlice";
import GlobalStyle from "../../../styles/GlobalStyle";

const customRender = (
  ui: React.ReactElement,
  {
    dispatch,
    initialEntries,
    path = "*",
    store = configureStore({
      reducer: { user: userReducer, ui: UIReducer, games: gameReducer },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Router = ({
    children,
    initialEntries,
  }: ExtendedPropsWithChildren): JSX.Element => {
    return initialEntries ? (
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path={path} element={children}></Route>
        </Routes>
      </MemoryRouter>
    ) : (
      <BrowserRouter>{children}</BrowserRouter>
    );
  };

  if (dispatch) {
    store.dispatch = dispatch;
  }

  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Router initialEntries={initialEntries}>
        <GlobalStyle />
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default customRender;

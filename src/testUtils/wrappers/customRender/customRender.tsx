import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  ExtendedPropsWithChildren,
  ExtendedRenderOptions,
} from "./types/types";
import { store as appStore } from "../../../store/store";

const customRender = (
  ui: React.ReactElement,
  {
    initialEntries,
    store = appStore,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Router = ({
    children,
    initialEntries,
  }: ExtendedPropsWithChildren): JSX.Element => {
    return initialEntries ? (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    ) : (
      <BrowserRouter>{children}</BrowserRouter>
    );
  };

  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Router initialEntries={initialEntries}>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default customRender;

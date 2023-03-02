import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { gameReducer } from "../../../store/games/gamesSlice";
import { UIReducer } from "../../../store/UI/UISlice";
import { userReducer } from "../../../store/user/userSlice";
import { ExtendedRenderHookOptions } from "../customRender/types/types";
import { renderHook } from "@testing-library/react";

const customRenderHook = ({
  store = configureStore({
    reducer: { user: userReducer, ui: UIReducer, games: gameReducer },
  }),
  customHook,
  ...renderOptions
}: ExtendedRenderHookOptions) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return {
    store,
    ...renderHook(() => customHook(), {
      wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
      ...renderOptions,
    }),
  };
};

export default customRenderHook;

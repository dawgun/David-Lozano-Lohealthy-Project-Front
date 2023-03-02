import { PreloadedState } from "@reduxjs/toolkit";
import { RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import useGames from "../../../../hooks/useGames/useGames";
import useUser from "../../../../hooks/useUser/useUser";
import { RootState, store } from "../../../../store/store";

export interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: string[];
  path?: string;
}

export interface ExtendedRenderOptions
  extends Omit<RenderOptions, "queries">,
    ExtendedPropsWithChildren {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

export interface ExtendedRenderHookOptions extends ExtendedRenderOptions {
  customHook: typeof useGames | typeof useUser;
}

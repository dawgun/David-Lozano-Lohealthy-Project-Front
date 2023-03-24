import { PreloadedState } from "@reduxjs/toolkit";
import { RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
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

export interface ExtendedRenderHookOptions<T extends () => ReturnType<T>>
  extends ExtendedRenderOptions {
  customHook: T;
}

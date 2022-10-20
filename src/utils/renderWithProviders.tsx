import { ReactElement, PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { RenderOptions } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { AppStore, RootState, setupStore } from "../store";

type ExtendedRenderOptions = {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
} & Omit<RenderOptions, "queries">;

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

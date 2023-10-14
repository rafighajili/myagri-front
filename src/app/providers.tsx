"use client";

import { ChildrenProp, useMounted } from "#/lib";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from "react-aria";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function Providers({ children }: ChildrenProp) {
  return (
    <Provider store={store}>
      <SSRProvider>
        <AfterMountingProviders>{children}</AfterMountingProviders>
      </SSRProvider>
    </Provider>
  );
}

function AfterMountingProviders({ children }: ChildrenProp) {
  return useMounted() ? (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  ) : (
    <>{children}</>
  );
}

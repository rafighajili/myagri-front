"use client";

import { ChildrenProp, useMounted } from "#/lib";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "#/redux/store";

export default function Providers({ children }: ChildrenProp) {
  return (
    <Provider store={store}>
      <AfterMountingProviders>{children}</AfterMountingProviders>
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

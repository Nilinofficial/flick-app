import { Slot } from "expo-router";
import { ReactNode } from "react";
import "../../global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../store/store";
export default function RootLayout(): ReactNode {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </Provider>
  );
}

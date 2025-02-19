import { Slot } from "expo-router";
import { ReactNode } from "react";
import "../../global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "../providers/AuthProvider";

export default function RootLayout(): ReactNode {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Slot />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

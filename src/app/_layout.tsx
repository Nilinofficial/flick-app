
import { Slot } from "expo-router";
import { ReactNode } from "react";
import "../../global.css";
import AuthProvider from "../providers/AuthProvider";


export default function RootLayout(): ReactNode {
  return (

    <AuthProvider>
      <Slot />
    </AuthProvider>

  );
}

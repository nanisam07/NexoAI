import "./globals.css";

import type { ComponentType, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { AuthProvider as RawAuthProvider } from "@/context/AuthContext";

const AuthProvider = RawAuthProvider as ComponentType<{ children: ReactNode }>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body>

        <AuthProvider>

          <Toaster position="top-right" />

          {children}

        </AuthProvider>

      </body>

    </html>
  );
}
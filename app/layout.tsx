import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu/Menu";
import { PawBackground } from "@/components/PawBackground";

export const metadata: Metadata = {
  title: "PetSocialNetwork",
  description: "Una red social para mascotas",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PawBackground />
          <Header />
          <div className="container mx-auto p-4">
            <div className="flex flex-col gap-6 lg:flex-row">
              <Menu />
              <div className="z-20 flex-1">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

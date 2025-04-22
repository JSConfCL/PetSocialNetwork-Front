import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { PawBackground } from "@/components";
import { LayoutController } from "@/components/layout/LayoutController";

export const metadata: Metadata = {
  title: "PetSocialNetwork",
  description: "Una red social para mascotas"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<PawBackground />

					<LayoutController>
						{children}
					</LayoutController>
        </ThemeProvider>
      </body>
    </html>
  );
}

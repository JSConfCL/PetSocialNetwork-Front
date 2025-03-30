import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Header, Menu, PawBackground } from "@/components/";

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

          <Header />

          <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-64">
                <Menu />
              </aside>

              <main className="flex-1 lg:flex lg:justify-center">
                <div className="w-full lg:max-w-[calc(100%-4rem)]">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

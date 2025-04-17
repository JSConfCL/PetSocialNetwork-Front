import "./globals.css";

import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider, type Locale } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import { routing } from "@/i18n/routing";

import { Header, Menu, PawBackground } from "@/components";

export const metadata: Metadata = {
  title: "PetSocialNetwork",
  description: "Una red social para mascotas"
};

type LocaleLayoutProps = PropsWithChildren<{ params: Params<{ locale: Locale }> }>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            <PawBackground />

            <Header />

            <div className="container mx-auto p-4">
              <div className="flex flex-col gap-6 lg:flex-row">
                <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:w-64">
                  <Menu />
                </aside>

                <main className="flex-1 lg:flex lg:justify-center">
                  <div className="w-full lg:max-w-[calc(100%-4rem)]">{children}</div>
                </main>
              </div>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

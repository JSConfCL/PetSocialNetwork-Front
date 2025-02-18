import type { Metadata } from "next";

import "./globals.css";

import { Header, Menu, PawBackground, ThemeProvider } from "@/components/";


export const metadata: Metadata = {
    title       : "PetSocialNetwork",
    description : "Una red social para mascotas",
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <ThemeProvider
                    attribute       = "class"
                    defaultTheme    = "system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <PawBackground />

                    <Header />

                    <div className="container mx-auto p-4">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <Menu />

                            <div className="flex-1 z-20">
                                { children }
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

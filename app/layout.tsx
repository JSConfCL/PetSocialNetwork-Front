import type { Metadata } from "next";

import "./globals.css";

import { Header }   from "./components/Header";
import { Menu }     from "./components/Menu";


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
                <Header />

                <div className="container mx-auto p-4">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <Menu />

                        <div className="flex-1">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

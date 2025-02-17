'use client';

import Link from "next/link";

import { BookOpen, Heart, Home, PawPrint, Stethoscope } from "lucide-react";
import FadeContent from "./Animations/FadeContent/FadeContent";


export function Menu() {
    return (
        <FadeContent
            key             = { "menu" }
            blur            = { false }
            duration        = { 1000 }
            easing          = "ease-out"
            initialOpacity  = { 0 }
        >
            <div className="lg:w-64 w-full lg:sticky lg:top-20 h-fit">
                <div className="bg-card rounded-lg p-4 shadow-md border border-input">
                    <h2 className="font-semibold text-lg">Menú</h2>

                    <hr className="mt-3 mb-2 border-1" />

                    <nav className="space-y-2">
                        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                            <Home strokeWidth={1.5} />
                            Inicio
                        </Link>

                        <Link href="/adoptions-sales" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                            <Heart strokeWidth={1.5} />
                            Adopciones y Ventas
                        </Link>

                        <Link href="/veterinaries" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                            <Stethoscope strokeWidth={1.5} />
                            Veterinarias
                        </Link>

                        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                            <PawPrint strokeWidth={1.5} />
                            Hogares
                        </Link>

                        <Link href="/care" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                            <BookOpen strokeWidth={1.5} />
                            Guía
                        </Link>
                    </nav>
                </div>
            </div>
        </FadeContent>
    );
}

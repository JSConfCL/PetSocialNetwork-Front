import Link from "next/link";

import { BookOpen, Heart, PlusCircle, Stethoscope } from "lucide-react";

export function Menu() {
    return (
        <div className="lg:w-64 w-full lg:sticky lg:top-20 h-fit">
            <div className="bg-card rounded-lg p-4 shadow-md">
                <h2 className="font-semibold mb-4 text-lg">Menú</h2>

                <nav className="space-y-2">
                    <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                        <PlusCircle strokeWidth={1.5} />
                        Inicio
                    </Link>

                    <Link href="/pets" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                        <Heart strokeWidth={1.5} />
                        Adopciones y Ventas
                    </Link>

                    <Link href="/veterinaries" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                        <Stethoscope strokeWidth={1.5} />
                        Veterinarias
                    </Link>

                    <Link href="/care" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-secondary">
                        <BookOpen strokeWidth={1.5} />
                        Guía de Cuidados
                    </Link>
                </nav>
            </div>
        </div>
    );
}

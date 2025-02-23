'use client';

import { BookOpen, Heart, Home, PawPrint, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";


import { Button, FadeContent, MenuItem } from "@/components/";


export function Menu() {
    const [active, setActive] = useState<string>( '/' );

    useEffect(() => setActive( window.location.pathname ), []);

    const links = [
        {
            value   : 'Dashboard',
            href    : '/',
            icon    : <Home strokeWidth={1.5} />
        },
        {
            value   : "Centro de Patitas",
            href    : "/paws",
            icon    : <PawPrint strokeWidth={1.5} />
        },
        {
            value   : "Adopciones y Ventas",
            href    : "/adoptions-sales",
            icon    : <Heart strokeWidth={1.5} />
        },
        {
            value   : "Guía y Consejos",
            href    : "/guides",
            icon    : <BookOpen strokeWidth={1.5} />
        },
    ];


    return (
        <FadeContent
            key             = { "menu" }
            blur            = { false }
            duration        = { 1000 }
            easing          = "ease-out"
            initialOpacity  = { 0 }
        >
            <div className="lg:w-64 w-full lg:sticky lg:top-20 h-fit z-20">
                <div className="bg-white/70 dark:bg-[#10061d]/50 rounded-lg p-4 shadow-md shadow-purple-200 dark:shadow-purple-950 border border-input">
                    <h2 className="font-semibold text-lg text-purple-700">Menú</h2>

                    <hr className="mt-3 mb-2 border-1" />

                    <nav className="space-y-2">
                        {links.map((link, index) => (
                            <MenuItem
                                key         = { index }
                                value       = { link.value }
                                href        = { link.href }
                                active      = { active }
                                setActive   = { setActive }
                            >
                                { link.icon }
                                { link.value }
                            </MenuItem>
                        ))}

                        <hr className="mt-3 mb-3 border-1" />

                        <Button
                            variant     = "ghost"
                            className   = "mx-auto justify-center text-purple-700 w-full h-10 p-0"
                        >
                            <PlusCircle strokeWidth={1.5} size={50} />
                        </Button>
                    </nav>
                </div>
            </div>
        </FadeContent>
    );
}

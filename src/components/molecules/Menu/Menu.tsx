"use client";
import { BookOpen, Heart, Home, PawPrint } from "lucide-react";
import { useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import { FadeContent, PlusButton, MenuItem } from "@/components";

const links = [
  {
    value: "Dashboard",
    href: "/",
    icon: <Home strokeWidth={1.5} />
  },
  {
    value: "Centro de Patitas",
    href: "/paws",
    icon: <PawPrint strokeWidth={1.5} />
  },
  {
    value: "Adopciones y Ventas",
    href: "/adoptions-sales",
    icon: <Heart strokeWidth={1.5} />
  },
  {
    value: "Guía y Consejos",
    href: "/guides",
    icon: <BookOpen strokeWidth={1.5} />
  }
];

export const Menu = (props: ComponentPropsWithoutRef<'div'>): ReactElement => {
  const [ currentRoute, setCurrentRoute ] = useState<string>("/");

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  return (
    <FadeContent key={"menu"} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
      <div {...props} className="z-20 h-fit w-full lg:sticky lg:top-20 lg:w-64 backdrop-blur-sm">
        <div className="rounded-lg border border-input bg-white/70 p-4 shadow-md shadow-purple-200 dark:bg-[#10061d]/50 dark:shadow-purple-950">
          <h2 className="text-lg font-semibold text-purple-700">Menú</h2>

          <hr className="border-1 mb-2 mt-3" />

          <nav className="space-y-2">
            { links.map(({ value, href, icon }) =>
              <MenuItem
                key={value}
                href={href}
                isActive={currentRoute === value}
                onClick={() => setCurrentRoute(value)}
              >
                { icon }
                { value }
              </MenuItem>
            )}

            <hr className="border-1 mb-3 mt-3" />

            <PlusButton />
          </nav>
        </div>
      </div>
    </FadeContent>
  );
}

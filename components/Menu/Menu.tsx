"use client";

import { BookOpen, Heart, Home, PawPrint, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button, FadeContent, MenuItem } from "@/components/";

export function Menu() {
  const [active, setActive] = useState<string>("/");

  useEffect(() => setActive(window.location.pathname), []);

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

  return (
    <FadeContent key={"menu"} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
      <div className="z-20 h-fit w-full lg:sticky lg:top-20 lg:w-64 backdrop-blur-sm">
        <div className="rounded-lg border border-input bg-white/70 p-4 shadow-md shadow-purple-200 dark:bg-[#10061d]/50 dark:shadow-purple-950">
          <h2 className="text-lg font-semibold text-purple-700">Menú</h2>

          <hr className="border-1 mb-2 mt-3" />

          <nav className="space-y-2">
            {links.map((link, index) => (
              <MenuItem key={index} value={link.value} href={link.href} active={active} setActive={setActive}>
                {link.icon}
                {link.value}
              </MenuItem>
            ))}

            <hr className="border-1 mb-3 mt-3" />

            <Button variant="ghost" className="mx-auto h-10 w-full justify-center p-0 text-purple-700">
              <PlusCircle strokeWidth={1.5} size={50} />
            </Button>
          </nav>
        </div>
      </div>
    </FadeContent>
  );
}

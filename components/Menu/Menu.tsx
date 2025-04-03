"use client";
import { BookOpen, Heart, Home, PawPrint } from "lucide-react";
import { ComponentPropsWithoutRef, useEffect, useState, type ReactElement } from "react";

import { FadeContent, MenuItem } from "@/components/";

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

const PlusButton = () => {
  return (
    <button
      className="rounded-lg items-center transition-colors justify-center flex h-10 w-full hover:bg-purple-200 dark:hover:bg-purple-950/50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-700" viewBox="0 0 24 24">
        <g fill="none" stroke="#e7c2ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path strokeDasharray={64} strokeDashoffset={64} d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
          </path>
          <path strokeDasharray={12} strokeDashoffset={12} d="M7 12h10">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></animate>
          </path>
          <path strokeDasharray={12} strokeDashoffset={12} d="M12 7v10">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></animate>
          </path>
        </g>
      </svg>
    </button>
  );
}

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

"use client";

import { BookOpen, Heart, Home, PawPrint } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, ReactElement } from "react";

import { FadeContent, PlusButton, MenuItem } from "@/components";

export const Menu = (props: ComponentPropsWithoutRef<"div">): ReactElement => {
  const t = useTranslations("Menu");

  const [currentRoute, setCurrentRoute] = useState<string>("/");

  const links = [
    {
      value: t("dashboard"),
      href: "/",
      icon: Home
    },
    {
      value: t("littlePawsCenter"),
      href: "/paws",
      icon: PawPrint
    },
    {
      value: t("adoptionsAndSales"),
      href: "/adoptions-sales",
      icon: Heart
    },
    {
      value: t("guideAndTips"),
      href: "/guides",
      icon: BookOpen
    }
  ];

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  return (
    <FadeContent key={"menu"} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
      <div {...props} className="z-20 h-fit w-full backdrop-blur-sm lg:sticky lg:top-20 lg:w-64">
        <div className="rounded-lg border border-input bg-white/70 p-4 shadow-md shadow-purple-200 dark:bg-[#10061d]/50 dark:shadow-purple-950">
          <h2 className="text-lg font-semibold text-purple-700">{t("menu")}</h2>

          <hr className="border-1 mb-2 mt-3" />

          <nav className="space-y-2">
            {links.map(({ value, href, icon: Icon }) => (
              <MenuItem
                key={value}
                href={href}
                isActive={currentRoute === value}
                onClick={() => setCurrentRoute(value)}
              >
                <Icon strokeWidth={1.5} />
                {value}
              </MenuItem>
            ))}

            <hr className="border-1 mb-3 mt-3" />

            <PlusButton />
          </nav>
        </div>
      </div>
    </FadeContent>
  );
};

"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, Skeleton } from "@/components";

interface ThemesType {
  label: string;
  value: "light" | "dark" | "system";
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const ThemeSwitcher = () => {
  const t = useTranslations("ThemeSwitcher");

  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  const themes: ThemesType[] = [
    {
      label: t("systemLabel"),
      value: "system",
      Icon: Monitor
    },
    {
      label: t("lightLabel"),
      value: "light",
      Icon: Sun
    },
    {
      label: t("darkLabel"),
      value: "dark",
      Icon: Moon
    }
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Skeleton className="h-10" />;
  }

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="mx-auto h-10 w-fit gap-2 border-none shadow-none">
        <span>{t("label")}</span>
        {themes.map(({ value, Icon, label }) =>
          theme === value ? (
            <div key={value} className="flex items-center gap-2">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>
          ) : null
        )}
      </SelectTrigger>

      <SelectContent align="center" className="dark:bg-[#10061d]">
        {themes.map(({ Icon, value, label }) => (
          <SelectItem key={value} value={value} className="hover:bg-purple-100 dark:hover:bg-purple-950/20">
            <div className="flex w-full items-center justify-center gap-2">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitcher;

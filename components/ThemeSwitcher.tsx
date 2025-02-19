"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentType, SVGProps, useEffect, useState } from "react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui";
import { Skeleton } from "./ui/skeleton";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const themes: {
    label: string;
    value: "light" | "dark" | "system";
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }[] = [
    { label: "Sistema", value: "system", Icon: Monitor },
    { label: "Claro", value: "light", Icon: Sun },
    { label: "Oscuro", value: "dark", Icon: Moon },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-10 w-16" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {themes.map(
            ({ value, Icon, label }) =>
              theme === value && (
                <div key={value} className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <span>{label}</span>
                </div>
              ),
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themes.map(({ Icon, value, label }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
            <Icon className="size-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

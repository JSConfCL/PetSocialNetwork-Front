"use client";

import { type Locale, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { startTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(value: Locale) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);

      const url = `${pathname}${params.size ? `?${params}` : ""}`;

      router.replace(url, { locale: value, scroll: false });
    });
  }

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="cursor-pointer border-none">{locale.toUpperCase()}</SelectTrigger>
      <SelectContent align="center" className="dark:bg-[#10061d]">
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

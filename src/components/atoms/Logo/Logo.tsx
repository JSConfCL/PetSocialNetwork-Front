import { PawPrint } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, type LinkProps } from "@/i18n/navigation";

export const Logo = (props: Partial<LinkProps>) => {
  const t = useTranslations("Logo");

  return (
    <Link {...props} href="/" className="flex items-center gap-2">
      <div className="rounded-full bg-purple-500 p-2">
        <PawPrint className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">{t("label")}</span>
    </Link>
  );
};

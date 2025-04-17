import { useTranslations } from "next-intl";

import {
  ButtonVariants,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components";

type LogoutDialogProps = {
  onLogout: () => void;
};

export function LogoutDialog({ onLogout }: LogoutDialogProps) {
  const t = useTranslations("LogoutDialog");

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full text-left">{t("trigger")}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("description")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={onLogout} className={ButtonVariants({ variant: "destructive" })}>
            {t("trigger")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

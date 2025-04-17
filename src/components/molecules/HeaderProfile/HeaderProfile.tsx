"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, type ReactElement } from "react";

import { Link } from "@/i18n/navigation";

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  LogoutDialog,
  ThemeSwitcher
} from "@/components";

export interface HeaderProfileProps {
  currentPet: {
    name: string;
    profilePicture: string;
  };
}

export const HeaderProfile = (props: HeaderProfileProps): ReactElement => {
  const t = useTranslations("HeaderProfile");

  const { currentPet } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = () => {
    setIsOpen(false);
    // Do logout
  };

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-2 hover:bg-purple-300/50 dark:hover:bg-purple-950/30">
            <span className="hidden font-medium md:inline-block">{currentPet.name}</span>

            <Avatar className="size-8">
              <Image
                src={currentPet.profilePicture}
                alt={currentPet.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-2 w-64 rounded-xl border border-purple-200/20 bg-white/95 p-2 shadow-lg backdrop-blur-sm dark:border-purple-500/10 dark:bg-[#10061d]/95 dark:shadow-purple-500/5">
          <DropdownMenuItem
            asChild
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-purple-100 dark:text-zinc-200 dark:hover:bg-purple-950/40"
          >
            <Link href="/settings/profile">{t("profileConfiguration")}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-purple-100 dark:text-zinc-200 dark:hover:bg-purple-950/40"
          >
            <Link href="/settings/privacy">{t("privacyConfiguration")}</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-2 h-px bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 dark:from-purple-500/10 dark:via-purple-600/10 dark:to-purple-500/10" />
          <DropdownMenuItem
            onClick={(event) => event.preventDefault()}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-purple-100 dark:text-zinc-200 dark:hover:bg-purple-950/40"
          >
            <LogoutDialog onLogout={onLogout} />
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-2 h-px bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 dark:from-purple-500/10 dark:via-purple-600/10 dark:to-purple-500/10" />
          <ThemeSwitcher />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderProfile;

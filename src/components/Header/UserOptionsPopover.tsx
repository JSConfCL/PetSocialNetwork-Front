"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LogoutButton } from "@/components/Header/LogoutButton";
import { ThemeSwitcher } from "@/components/Header/ThemeSwitcher";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

type UserOptionsPopoverProps = {
  currentPet: {
    name: string;
    profilePicture: string;
  };
};

export function UserOptionsPopover({ currentPet }: UserOptionsPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onLogout() {
    setIsOpen(false);

    // Do logout
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-purple-300/50 dark:hover:bg-purple-950/30 rounded-lg px-4 py-2">
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

      <DropdownMenuContent className="w-64 p-2 bg-white/95 dark:bg-[#10061d]/95 backdrop-blur-sm mt-2 rounded-xl border border-purple-200/20 dark:border-purple-500/10 shadow-lg dark:shadow-purple-500/5">
        <DropdownMenuItem asChild className="px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-purple-100 dark:hover:bg-purple-950/40 rounded-lg transition-colors">
          <Link href="/settings/profile">Configuración del perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-purple-100 dark:hover:bg-purple-950/40 rounded-lg transition-colors">
          <Link href="/settings/privacy">Configuración de privacidad</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2 h-px bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 dark:from-purple-500/10 dark:via-purple-600/10 dark:to-purple-500/10" />
        <DropdownMenuItem onClick={(event) => event.preventDefault()} className="px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-purple-100 dark:hover:bg-purple-950/40 rounded-lg transition-colors">
          <LogoutButton onLogout={onLogout} />
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2 h-px bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 dark:from-purple-500/10 dark:via-purple-600/10 dark:to-purple-500/10" />
        <ThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

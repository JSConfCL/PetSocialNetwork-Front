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
  DropdownMenuLabel,
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
        <div className="flex items-center gap-2">
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
      <DropdownMenuContent className="bg-white dark:bg-[#10061d]">
        <DropdownMenuLabel className="flex items-center gap-2">
          <span>{currentPet.name}</span>
          <Avatar className="h-8 w-8">
            <Image
              src={currentPet.profilePicture}
              alt={currentPet.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </Avatar>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/settings/profile">Configuración del perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings/privacy">Configuración de privacidad</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(event) => event.preventDefault()}>
          <LogoutButton onLogout={onLogout} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { createPortal } from "react-dom";

import { Pet } from "@/models/pet.model";

import { APP_LINKS, TEST_IDS } from "@/lib/constants";
import { eventPreventDefault } from "@/lib/utils";

import { ButtonLogout } from "@/components/ButtonLogout";
import { Modal } from "@/components/Modal";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ButtonOptionsUser({ pet }: { pet: Pet }) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  function navigateToProfile() {
    router.push(`${APP_LINKS.USER_PAGE}/${pet.name}`);
  }

  function onLogout() {
    startTransition(async () => {
      // logout logic
      alert("Cerrando sesión...");
    });
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          data-testid={TEST_IDS.userMenuButtonTrigger}
          className="rounded-full"
        >
          <Avatar className="size-8">
            <Image
              src={pet.profilePicture}
              alt={pet.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex items-center gap-2">
            <span>Hola {pet.name}!</span>
            <Avatar className="size-8">
              <Image
                src={pet.profilePicture}
                alt={pet.name}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </Avatar>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Configuración</DropdownMenuLabel>
          <DropdownMenuItem
            onSelect={navigateToProfile}
            data-testid={TEST_IDS.profileButton}
          >
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem>Privacidad</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={eventPreventDefault}>
            <ButtonLogout onLogout={onLogout} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Tema</DropdownMenuLabel>
          <DropdownMenuItem onSelect={eventPreventDefault}>
            <ThemeSwitcher />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isPending && createPortal(<Modal type="loading" />, document.body)}
    </>
  );
}

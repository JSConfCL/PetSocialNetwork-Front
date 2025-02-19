"use client";

import { TEST_IDS } from "@/lib/constants";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";

type ButtonLogoutProps = { onLogout: () => void };

export function ButtonLogout({ onLogout }: ButtonLogoutProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger data-testid={TEST_IDS.logoutButtonTrigger}>
        Cerrar sesión
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Quieres cerrar sesión?</AlertDialogTitle>
          <AlertDialogDescription>Selecciona una opción</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={onLogout}
            data-testid={TEST_IDS.logoutButton}
            className={buttonVariants({ variant: "destructive" })}
          >
            Cerrar sesión
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

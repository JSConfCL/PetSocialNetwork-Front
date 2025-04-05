import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";

type LogoutButtonProps = {
  onLogout: () => void;
};

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full text-left">Cerrar sesión</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Quieres cerrar sesión?</AlertDialogTitle>
          <AlertDialogDescription>Selecciona una opción</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onLogout} className={buttonVariants({ variant: "destructive" })}>
            Cerrar sesión
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

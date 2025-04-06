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
          <AlertDialogAction onClick={onLogout} className={ButtonVariants({ variant: "destructive" })}>
            Cerrar sesión
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

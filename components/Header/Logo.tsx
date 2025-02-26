import { PawPrint as Paw } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-full bg-purple-500 p-2">
        <Paw className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">PetSocial</span>
    </Link>
  );
}

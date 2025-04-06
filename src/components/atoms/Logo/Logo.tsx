import { PawPrint } from "lucide-react";
import Link, { type LinkProps } from "next/link";

export const Logo = (props: Partial<LinkProps>) => (
  <Link {...props} href="/" className="flex items-center gap-2">
    <div className="rounded-full bg-purple-500 p-2">
      <PawPrint className="h-6 w-6 text-primary-foreground" />
    </div>
    <span className="text-xl font-bold">PetSocial</span>
  </Link>
)

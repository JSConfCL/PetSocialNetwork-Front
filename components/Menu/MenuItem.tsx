import Link from "next/link";
import { JSX } from "react";

type MenuItemProps = {
  setActive: (value: string) => void;
  active: string;
  value: string;
  href: string;
  children: React.ReactNode;
};

export function MenuItem({
  setActive,
  active,
  value,
  href,
  children,
}: MenuItemProps): JSX.Element {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${active === value && "bg-purple-200 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"} rounded-md p-2 text-purple-500 transition-colors hover:scale-[1.02] hover:bg-purple-100 hover:text-purple-700 active:scale-[0.98] active:bg-purple-200 dark:hover:bg-purple-950 dark:hover:text-purple-300`}
      onClick={() => setActive(value)}
    >
      {children}
    </Link>
  );
}

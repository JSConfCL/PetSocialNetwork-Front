import Link     from "next/link";
import { JSX }  from "react";


type MenuItemProps = {
    setActive   : ( value: string ) => void;
    active      : string;
    value       : string;
    href        : string;
    children    : React.ReactNode;
};

export function MenuItem({
    setActive,
    active,
    value,
    href,
    children
}: MenuItemProps ): JSX.Element {
    return (
        <Link
            href        = { href }
            className   = {`flex items-center gap-2 ${active === value && "bg-purple-200 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"} text-purple-500 dark:text-purple-300 hover:text-purple-700 transition-colors p-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-950 dark:hover:text-purple-300 active:bg-purple-200 active:scale-[0.98] hover:scale-[1.02]`}
            onClick     = {() => setActive( value )}
        >
            { children }
        </Link>
    );
}

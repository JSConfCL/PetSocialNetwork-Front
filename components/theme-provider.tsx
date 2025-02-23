'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps, JSX, useEffect, useState } from "react";



export function ThemeProvider({
    children,
    ...props
}: ComponentProps<typeof NextThemesProvider> ): JSX.Element {
    const [mounted, setMounted] = useState( false );

    useEffect(() => {
        setMounted( true );
    }, []);

    if ( !mounted ) return <>{ children }</>

    return (
        <NextThemesProvider { ...props }>
            { children }
        </NextThemesProvider>
    );
}

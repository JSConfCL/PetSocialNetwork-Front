import { createNavigation } from "next-intl/navigation";
import type { ComponentProps } from "react";

import { routing } from "@/i18n/routing";

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export type LinkProps = ComponentProps<typeof Link>;

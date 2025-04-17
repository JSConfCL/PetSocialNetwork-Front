"use client";
import { Bell, MessageCircle } from "lucide-react";

import { Link } from "@/i18n/navigation";

import { CountUp, Button } from "@/components";

export const HeaderActions = () => (
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="icon" className="relative hover:bg-purple-200 dark:hover:bg-purple-950/50">
      <Bell className="h-10 w-10" />
      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
        <CountUp from={0} to={3} separator="." direction="up" duration={1} />
      </span>
    </Button>
    <Link
      href="/chat"
      className="flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:bg-purple-950/50"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  </div>
);

export default HeaderActions;

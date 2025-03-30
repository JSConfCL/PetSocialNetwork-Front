import Link from "next/link";

import { Bell, MessageCircle } from "lucide-react";

import { CountUp } from "@/components/Animations/CountUp";
import { Button } from "@/components/ui/button";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
          <CountUp from={0} to={3} separator="." direction="up" duration={1} />
        </span>
      </Button>
      <Link
        href="/chat"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
    </div>
  );
}

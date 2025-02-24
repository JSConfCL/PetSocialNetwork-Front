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
      <Button variant="ghost" size="icon">
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
}

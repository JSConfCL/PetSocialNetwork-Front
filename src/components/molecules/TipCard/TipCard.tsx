import type { ReactElement, ReactNode } from "react";

import { Card } from "@/components/";

export interface TipCardProps {
  content: string;
  icon: ReactNode;
  tips: string[];
  title: string;
}

export function TipCard(guide: TipCardProps): ReactElement {
  return (
    <Card className="p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-3">{guide.icon}</div>

        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold">{guide.title}</h3>

          <p className="mb-4 text-muted-foreground">{guide.content}</p>

          <ul className="space-y-2">
            {guide.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

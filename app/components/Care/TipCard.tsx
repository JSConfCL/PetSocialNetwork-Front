import { JSX } from "react";

import { Card } from "@/components/ui";


type Tip = {
    title   : string;
    content : string;
    tips    : string[];
    icon    : React.ReactNode;
}


export default function TipCard(
    guide: Tip,
): JSX.Element {
    return (
        <Card className="p-6 shadow-md">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    { guide.icon }
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{ guide.title }</h3>

                    <p className="text-muted-foreground mb-4">{ guide.content }</p>

                    <ul className="space-y-2">
                        {guide.tips.map(( tip, tipIndex ) => (
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

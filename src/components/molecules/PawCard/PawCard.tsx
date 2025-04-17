import { type Veterinary } from "@/interfaces/veterinary";
import { Star, Clock, Phone } from "lucide-react";
import Image from "next/image";
import type { JSX } from "react";

import { Card } from "@/components";

export function PawCard(vet: Veterinary): JSX.Element {
  return (
    <Card key={vet.id} className="hover:scale-[1.01]">
      <header className="relative h-48">
        <Image fill src={vet.image} alt={vet.name} className="object-cover" />
      </header>

      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{vet.name}</h2>

          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">{vet.rating}</span>
          </div>
        </div>

        <p className="mb-4 text-muted-foreground">{vet.description}</p>

        <footer className="space-y-3">
          <div className="flex items-start gap-2">
            <Clock className="mt-1 h-5 w-5 text-muted-foreground" />

            <div>
              {vet.schedule.map((schedule, index) => (
                <p key={index} className="text-sm">
                  <span className="font-medium">
                    {schedule.days}
                    {":"}
                  </span>{" "}
                  {schedule.hours}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />

            <a href={`tel:${vet.phone}`} className="text-sm hover:underline">
              {vet.phone}
            </a>
          </div>
        </footer>
      </div>
    </Card>
  );
}

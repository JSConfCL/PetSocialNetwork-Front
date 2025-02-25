import { Heart, DollarSign } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

import { Pet } from "@/models";

import { Card, CountUp, Badge } from "@/components";

export function AdoptionSalesCard(pet: Pet): JSX.Element {
  return (
    <Card key={pet.id} className="overflow-hidden hover:scale-[1.01]">
      <div className="relative h-64">
        <Image fill src={pet.image} alt={pet.name} className="object-cover" />

        <Badge
          className={`absolute right-4 top-4 ${
            pet.status === "adoption" ? "bg-green-500/90 hover:bg-green-500/90" : "bg-blue-500/90 hover:bg-blue-500/90"
          }`}
        >
          {pet.status === "adoption" ? <Heart className="mr-1 h-4 w-4" /> : <DollarSign className="mr-1 h-4 w-4" />}
          {pet.status === "adoption" ? "Me adoptan" : "Me venden"}
        </Badge>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{pet.name}</h2>
          <span className="text-sm text-muted-foreground">{pet.age}</span>
        </div>

        <p className="mb-4 text-muted-foreground">{pet.description}</p>

        <div className="space-y-3">
          <div>
            <span className="font-medium">Personalidad:</span>{" "}
            <span className="text-muted-foreground">{pet.personality}</span>
          </div>

          {pet.status === "sale" && pet.price && (
            <div className="flex items-center text-lg font-medium">
              Precio:
              <span className="ml-2 flex items-center">
                <DollarSign className="h-4 w-4" />

                <CountUp from={0} to={pet.price} separator="." direction="up" duration={1} />
              </span>
            </div>
          )}

          <div className="rounded-lg bg-gray-100 p-4 text-sm italic text-purple-500 dark:bg-gray-950">
            {`"${pet.message}"`}
          </div>
        </div>
      </div>
    </Card>
  );
}

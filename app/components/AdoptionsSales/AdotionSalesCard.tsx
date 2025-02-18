import { JSX } from "react";

import Image from 'next/image';

import { Heart, DollarSign } from 'lucide-react';

import { Card }     from "@/components/ui/card";
import { Badge }    from "@/components/ui/badge";
import { Pet }      from "../../models/pet.model";
import CountUp      from "@/app/components/Animations/CountUp/CountUp";


export default function AdotionSalesCard(
    pet: Pet
): JSX.Element {
    return (
        <Card key={pet.id} className="overflow-hidden hover:scale-[1.01]">
            <div className="relative h-64">
                <Image
                    fill
                    src         = { pet.image }
                    alt         = { pet.name }
                    className   = "object-cover"
                />

                <Badge
                    className={`absolute top-4 right-4 ${
                        pet.status === 'adoption'
                        ? 'bg-green-500/90 hover:bg-green-500/90'
                        : 'bg-blue-500/90 hover:bg-blue-500/90'
                    }`}
                >
                    {pet.status === 'adoption' ? (
                        <Heart className="h-4 w-4 mr-1" />
                    ) : (
                        <DollarSign className="h-4 w-4 mr-1" />
                    )}
                    {pet.status === 'adoption' ? 'Me adoptan' : 'Me venden'}
                </Badge>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{pet.name}</h2>
                    <span className="text-sm text-muted-foreground">{pet.age}</span>
                </div>

                <p className="text-muted-foreground mb-4">{pet.description}</p>

                <div className="space-y-3">
                    <div>
                        <span className="font-medium">Personalidad:</span>{' '}
                        <span className="text-muted-foreground">{pet.personality}</span>
                    </div>

                    {pet.status === 'sale' && pet.price && (
                        <div className="font-medium text-lg flex items-center">
                            Precio:
                            <span className='flex items-center ml-2'>
                                <DollarSign className="h-4 w-4 " />

                                <CountUp
                                    from        = { 0 }
                                    to          = { pet.price }
                                    separator   = "."
                                    direction   = "up"
                                    duration    = { 1 }
                                />
                            </span>
                        </div>
                    )}

                    <div className="bg-gray-100 dark:bg-gray-950 rounded-lg p-4 italic text-sm text-purple-500">
                        "{pet.message}"
                    </div>
                </div>
            </div>
        </Card>
    );
}
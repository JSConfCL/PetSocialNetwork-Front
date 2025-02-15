'use client';

import Image from 'next/image';

import { Heart, DollarSign } from 'lucide-react';

import { pets }     from '../data/pets';
import { Card }     from '@/components/ui/card';
import { Badge }    from '@/components/ui/badge';


export default function AdoptionsSalesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Adopciones y Ventas 🏠</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map((pet) => (
                        <Card key={pet.id} className="overflow-hidden shadow-md hover:scale-[1.01] transition-transform duration-300">
                            <div className="relative h-64">
                                <Image
                                    src={pet.image}
                                    alt={pet.name}
                                    fill
                                    className="object-cover"
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
                                                {pet.price}
                                            </span>
                                        </div>
                                    )}

                                    <div className="bg-secondary/50 rounded-lg p-4 italic text-sm">
                                        "{pet.message}"
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
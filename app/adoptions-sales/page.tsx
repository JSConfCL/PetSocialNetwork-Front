'use client';

import { pets } from '@/data';

import {
    FadeContent,
    AdoptionSalesCard
}               from '@/components/';


export default function AdoptionsSalesPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Adopciones y Ventas 🏠</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map((pet) => (
                        <FadeContent
                            key             = { pet.id }
                            blur            = { false }
                            duration        = { 1000 }
                            easing          = "ease-out"
                            initialOpacity  = { 0 }
                        >
                            <AdoptionSalesCard
                                key={pet.id}
                                {...pet}
                            />
                        </FadeContent>
                    ))}
                </div>
            </div>
        </main>
    );
}
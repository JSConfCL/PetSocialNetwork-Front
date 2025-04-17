"use client";

import { pets } from "@/placeholder/pets";
import { useTranslations } from "next-intl";

import { FadeContent, AdoptionSalesCard } from "@/components/";

export default function AdoptionsSalesPage() {
  const t = useTranslations("AdoptionsSalesPage");

  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {pets.map((pet) => (
            <FadeContent key={pet.id} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
              <AdoptionSalesCard key={pet.id} {...pet} />
            </FadeContent>
          ))}
        </div>
      </div>
    </main>
  );
}

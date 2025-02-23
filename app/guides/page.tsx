"use client";

import { Heart, Shield, Stethoscope, Dumbbell, Bath, Apple } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger, FadeContent, TipCard } from "@/components/";

const careGuides = {
  basic: [
    {
      title: "Alimentación Balanceada",
      icon: <Apple className="h-6 w-6" />,
      content:
        "Mantén una dieta equilibrada según la edad y tamaño de tu mascota. Establece horarios regulares de alimentación y proporciona agua fresca constantemente.",
      tips: [
        "Consulta con tu veterinario la mejor dieta",
        "Evita alimentos tóxicos como chocolate o uvas",
        "Mide las porciones adecuadamente"
      ]
    },
    {
      title: "Higiene Regular",
      icon: <Bath className="h-6 w-6" />,
      content:
        "Mantén a tu mascota limpia y cepillada regularmente. La frecuencia del baño dependerá del tipo de mascota y su estilo de vida.",
      tips: [
        "Cepilla el pelaje regularmente",
        "Limpia las orejas y corta las uñas",
        "Usa productos específicos para mascotas"
      ]
    }
  ],
  health: [
    {
      title: "Visitas Veterinarias",
      icon: <Stethoscope className="h-6 w-6" />,
      content:
        "Programa chequeos regulares y mantén las vacunas al día. La prevención es clave para la salud de tu mascota.",
      tips: ["Vacunación según calendario", "Desparasitación regular", "Chequeos anuales preventivos"]
    },
    {
      title: "Primeros Auxilios",
      icon: <Shield className="h-6 w-6" />,
      content:
        "Ten un botiquín básico y conoce los signos de emergencia. Mantén a mano los contactos de emergencia veterinaria.",
      tips: ["Botiquín básico en casa", "Conoce signos de emergencia", "Ten plan de emergencia"]
    }
  ],
  training: [
    {
      title: "Entrenamiento Básico",
      icon: <Dumbbell className="h-6 w-6" />,
      content:
        "Establece rutinas de entrenamiento consistentes. El refuerzo positivo es clave para un entrenamiento exitoso.",
      tips: ["Comandos básicos diarios", "Usa premios como motivación", "Sé paciente y consistente"]
    },
    {
      title: "Socialización",
      icon: <Heart className="h-6 w-6" />,
      content:
        "Expón a tu mascota a diferentes situaciones, personas y otros animales de manera controlada y positiva.",
      tips: [
        "Exposición gradual a nuevas experiencias",
        "Mantén encuentros positivos",
        "Respeta el ritmo de tu mascota"
      ]
    }
  ]
};

export default function CarePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Guía de Cuidados 🐾</h1>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-purple-100 dark:bg-purple-950">
            <TabsTrigger value="basic">Cuidados Básicos</TabsTrigger>
            <TabsTrigger value="health">Salud</TabsTrigger>
            <TabsTrigger value="training">Entrenamiento</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            {careGuides.basic.map((guide, index) => (
              <FadeContent key={index} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                <TipCard {...guide} />
              </FadeContent>
            ))}
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            {careGuides.health.map((guide, index) => (
              <FadeContent key={index} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                <TipCard {...guide} />
              </FadeContent>
            ))}
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            {careGuides.training.map((guide, index) => (
              <FadeContent key={index} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                <TipCard {...guide} />
              </FadeContent>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

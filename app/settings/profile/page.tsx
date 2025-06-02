"use client";

import { type Pet } from "@/interfaces/pet";
import { pets } from "@/placeholder/pets";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileSettingsPage() {
  const pet = pets[0];

  const router = useRouter();

  const form = useForm<Pet>({
    defaultValues: {
      name: pet.name,
      type: pet.type,
      age: pet.age,
      price: pet.price,
      description: pet.description,
      personality: pet.personality,
      status: pet.status
    }
  });

  const petTypes: Record<Pet["type"], string> = {
    dog: "Perro",
    cat: "Gato",
    bird: "Ave",
    other: "Otro"
  };

  const petStatuses: Record<Pet["status"], string> = {
    adoption: "En adopción",
    sale: "En venta"
  };

  function onSubmit() {}

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Configuración del Perfil</h1>
      <Card>
        <CardHeader>
          <CardTitle>Información de tu perfil</CardTitle>
          <CardDescription>Actualiza tus datos personales y cómo te ven los demás en la plataforma.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-8">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={pet.profilePicture} alt="Profile picture" />
                  <AvatarFallback>
                    <UserCircle className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-2">
                  <Button size="sm">Subir nueva imagen</Button>
                  <Button variant="outline" size="sm">
                    Eliminar imagen
                  </Button>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de tu mascota" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Tipo de Mascota</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>{petTypes[field.value]}</SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(petTypes).map(([key, value]) => {
                              return (
                                <SelectItem key={key} value={key}>
                                  {value}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Edad</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Edad de tu mascota" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Precio de tu mascota" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="personality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Personalidad</FormLabel>
                      <FormControl>
                        <Input placeholder="Personalidad de tu mascota" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>{petStatuses[field.value]}</SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(petStatuses).map(([key, value]) => {
                              return (
                                <SelectItem key={key} value={key}>
                                  {value}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    );
                  }}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escribe una breve descripción de tu mascota" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escribe un mensaje para los interesados en tu mascota" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap gap-6">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancelar
                </Button>
                <Button type="submit">Actualizar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configuración de la cuenta</CardTitle>
          <CardDescription>Aquí puedes gestionar tu cuenta, cambiar tu contraseña y cerrar sesión.</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <Button variant="destructive">Eliminar cuenta</Button>
        </CardContent>
      </Card>
    </div>
  );
}

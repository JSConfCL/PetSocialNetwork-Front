import type { Veterinary } from "@/interfaces/veterinary";

export const veterinaries: Veterinary[] = [
  {
    id: "1",
    name: "Clínica Veterinaria San Francisco",
    description: "Atención integral para mascotas con servicios de emergencia 24/7",
    address: "Av. Principal 123",
    coordinates: {
      lat: 40.416775,
      lng: -3.70379
    },
    schedule: [
      { days: "Lunes a Viernes", hours: "8:00 - 20:00" },
      { days: "Sábados", hours: "9:00 - 15:00" },
      { days: "Domingos", hours: "Solo emergencias" }
    ],
    phone: "+34 912 345 678",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
  },
  {
    id: "2",
    name: "Centro Veterinario La Paz",
    description: "Especialistas en cirugía y tratamientos avanzados",
    address: "Calle Secundaria 456",
    coordinates: {
      lat: 40.418889,
      lng: -3.701944
    },
    schedule: [
      { days: "Lunes a Viernes", hours: "9:00 - 19:00" },
      { days: "Sábados", hours: "10:00 - 14:00" }
    ],
    phone: "+34 913 456 789",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def"
  },
  {
    id: "3",
    name: "Hospital Veterinario 24h",
    description: "Servicio de urgencias y hospitalización las 24 horas",
    address: "Plaza Mayor 789",
    coordinates: {
      lat: 40.42,
      lng: -3.705
    },
    schedule: [{ days: "Todos los días", hours: "24 horas" }],
    phone: "+34 914 567 890",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
  }
];

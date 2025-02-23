import { Pet } from "../models/pet.model";

export const pets: Pet[] = [
  {
    id: "1",
    name: "Luna",
    type: "dog",
    age: "2 años",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    description: "Soy una perrita muy juguetona y cariñosa",
    status: "adoption",
    personality: "Alegre y energética",
    message: "¡Hola! ¿Me ayudas a encontrar una familia amorosa?",
    profilePicture: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    followers: 2300
  },
  {
    id: "2",
    name: "Milo",
    type: "cat",
    age: "1 año",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description: "Soy un gatito muy elegante y tranquilo",
    status: "sale",
    price: 150,
    personality: "Tranquilo y curioso",
    message: "¿Buscas un compañero elegante? ¡Soy tu gato!",
    profilePicture: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    followers: 5600
  },
  {
    id: "3",
    name: "Rocky",
    type: "dog",
    age: "3 años",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    description: "Soy un perro guardián muy leal",
    status: "sale",
    price: 300,
    personality: "Protector y fiel",
    message: "¡Seré el mejor guardián de tu hogar!",
    profilePicture: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    followers: 1800
  },
  {
    id: "4",
    name: "Coco",
    type: "bird",
    age: "6 meses",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
    description: "Soy un pájaro muy cantarín",
    status: "adoption",
    personality: "Melodioso y sociable",
    message: "¡Llenaré tu casa de hermosas melodías!",
    profilePicture: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
    followers: 980
  }
];

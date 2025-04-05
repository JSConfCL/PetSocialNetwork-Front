import { Post } from '@/interfaces/post';

export const petsPost: Post[] = [
  {
    id: 1,
    userName: "LuckyDog",
    petName: "Max",
    content: "¡Día de parque con mi humano favorito! 🐾",
    imageUrl:
      "https://s3.amazonaws.com/assets.centralparknyc.org/media/images/_1650x767_crop_center-center_none/Dog_20200609_AH9A8387_RT.jpg",
    likes: 15,
    comments: [
      { id: 1, userName: "CatLover", content: "¡Qué divertido! 😊" },
      { id: 2, userName: "BirdWatcher", content: "Max se ve muy feliz." }
    ]
  },
  {
    id: 2,
    userName: "CoolCat",
    petName: "Luna",
    content: "Siesta de la tarde en mi lugar favorito 😺",
    imageUrl: "https://www.purina.in/sites/default/files/2020-12/How%20Long%20Do%20Cats%20SleepTEASER.jpg",
    likes: 20,
    comments: [
      {
        id: 3,
        userName: "DogFriend",
        content: "Luna, eres toda una modelo 🌟"
      }
    ]
  },
  {
    id: 3,
    userName: "HappyHamster",
    petName: "Peanut",
    content: "¡Nuevo juguete!, ¿quién dice que los lunes son aburridos? 🐹",
    imageUrl: "https://pridebites.com/cdn/shop/articles/jesper-brouwers-oD8uurkrH4c-unsplash.jpg?v=1672932192",
    likes: 10,
    comments: []
  }
];

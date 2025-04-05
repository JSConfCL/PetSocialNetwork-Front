export interface Comment {
    id: number;
    userName: string;
    content: string;
  }
  
export interface Post {
    id: number;
    userName: string;
    petName: string;
    content: string;
    imageUrl: string;
    likes: number;
    comments: Comment[];
  }
  
export type Pet = {
    id: string;
    name: string;
    type: 'dog' | 'cat' | 'bird' | 'other';
    age: string;
    image: string;
    description: string;
    status: 'adoption' | 'sale';
    price?: number;
    personality: string;
    message: string;
    profilePicture: string;
    followers?: number;
};

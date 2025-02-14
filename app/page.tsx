import PetPost from "./components/Dashboard/PetPost";
import { petsPost } from "./data/pets-post"

export default function Home() {
    return (
        <div className="space-y-6">
            {petsPost.map((post) => (
                <PetPost key={post.id} post={post} />
            ))}
        </div>
    );
}

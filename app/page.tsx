'use client'

import PetPost      from "./components/Dashboard/PetPost";
import { petsPost } from "./data/pets-post"
import FadeContent  from "@/app/components/Animations/FadeContent/FadeContent";


export default function Home() {
    return (
        <div className="sm:space-y-3 md:space-y-6">
            {petsPost.map((post) => (
                <FadeContent
                    key             = { post.id }
                    blur            = { false }
                    duration        = { 1000 }
                    easing          = "ease-out"
                    initialOpacity  = { 0 }
                >
                    <PetPost post={post} />
                </FadeContent>
            ))}
        </div>
    );
}

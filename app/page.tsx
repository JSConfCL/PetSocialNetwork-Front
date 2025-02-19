"use client";

import { petsPost } from "@/data-access/pets-post";

import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import PetPost from "@/components/Dashboard/PetPost";

export default function Home() {
  return (
    <div className="sm:space-y-3 md:space-y-6">
      {petsPost.map((post) => (
        <FadeContent
          key={post.id}
          blur={false}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <PetPost post={post} />
        </FadeContent>
      ))}
    </div>
  );
}

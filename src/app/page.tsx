"use client";

import { petsPost } from "@/data";

import { PetPost, FadeContent } from "@/components";

export default function Home() {
  return (
    <div className="sm:space-y-3 md:space-y-6">
      {petsPost.map((post) => (
        <FadeContent key={post.id} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
          <PetPost post={post} />
        </FadeContent>
      ))}
    </div>
  );
}

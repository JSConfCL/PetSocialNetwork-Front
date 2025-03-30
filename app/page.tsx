"use client";

import { petsPost } from "@/data";

import { PetPost, FadeContent } from "@/components/";

export default function Home() {
  return (
    <div className="ml-0 xl:ml-24 xl:max-w-2xl mx-auto space-y-3 md:space-y-5">
      {petsPost.map((post) => (
        <FadeContent key={post.id} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
          <PetPost post={post} />
        </FadeContent>
      ))}
    </div>
  );
}

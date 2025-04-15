"use client";

import Image from "next/image";
import { useState } from "react";

interface StoryCircleProps {
  imageUrl: string;
  username: string;
  seen: boolean;
}

export function StoryCircle({ imageUrl, username, seen }: StoryCircleProps) {
  const [isViewed, setIsViewed] = useState(seen);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsViewed(true);
    // Aquí iría la lógica para mostrar la historia completa
  };

  return (
    <div className="flex w-16 flex-col items-center space-y-1">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`h-16 w-16 rounded-full p-[3px] transition-transform duration-300 ${
          isViewed ? "bg-gray-300" : "bg-gradient-to-tr from-purple-400 to-purple-600"
        }`}
      >
        <div className="h-full w-full overflow-hidden rounded-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${username}'s story`}
            width={64}
            height={64}
            className={`h-full w-full rounded-full object-cover ${isHovered ? "scale-105" : ""} transition-transform duration-500`}
          />
        </div>
      </button>
      <span className="w-16 truncate text-center text-xs">{username}</span>
    </div>
  );
}

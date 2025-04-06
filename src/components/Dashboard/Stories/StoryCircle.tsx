"use client"

import { useState } from "react"
import Image from "next/image"

interface StoryCircleProps {
  imageUrl: string
  username: string
  seen: boolean
}

export function StoryCircle({ imageUrl, username, seen }: StoryCircleProps) {
  const [isViewed, setIsViewed] = useState(seen)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setIsViewed(true)
    // Aquí iría la lógica para mostrar la historia completa
  }

  return (
    <div className="flex flex-col items-center space-y-1 w-16">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-16 h-16 rounded-full p-[3px] transition-transform duration-300 ${
          isViewed ? "bg-gray-300" : "bg-gradient-to-tr from-purple-400 to-purple-600"
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${username}'s story`}
            width={64}
            height={64}
            className={`rounded-full object-cover w-full h-full ${isHovered ? "scale-105" : ""} transition-transform duration-500`}
          />
        </div>
      </button>
      <span className="text-xs text-center truncate w-16">{username}</span>
    </div>
  )
}


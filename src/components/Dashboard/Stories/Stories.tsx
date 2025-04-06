"use client"

import { useState, useRef } from "react"
import { StoryCircle } from "./StoryCircle"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Datos de historias
const stories = [
  { id: 1, username: "FluffyPaws", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2025/02/Portada-normal-111.jpg?w=550&h=309&crop=1", seen: false },
  { id: 2, username: "BarkMaster", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2025/01/Portada-normal-13.jpg?w=550&h=309&crop=1", seen: false },
  { id: 3, username: "WhiskerWonder", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/12/iStock-1393526817-e1734345968519.jpg?w=550&h=309&crop=1", seen: true },
  { id: 4, username: "PawsomeLife", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/04/26/662ba2f972891-e1732901106362.jpeg?w=550&h=309&crop=1", seen: false },
  { id: 5, username: "FurryTales", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/07/25/66a2694aa3243.jpeg?w=550&h=309&crop=1", seen: true },
  { id: 6, username: "SnugglePup", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/07/01/6682fb0cddf7f.jpeg?w=550&h=309&crop=1", seen: false },
  { id: 7, username: "MeowMingle", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/06/06/666176cfbd414.jpeg?w=550&h=309&crop=1", seen: false },
  { id: 8, username: "WoofWonders", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/10/12/63468d8aa12c2.jpeg?w=550&h=309&crop=1", seen: true },
  { id: 9, username: "PurrfectDay", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/05/29/66575645417d9.jpeg?w=550&h=309&crop=1", seen: false },
  { id: 10, username: "TailWagger", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/06/05/666023bbf3fad.jpeg?w=550&h=309&crop=1", seen: false },
  { id: 11, username: "FurBaby", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/03/25/660137587a661.jpeg?w=550&h=309&crop=1", seen: true },
  { id: 12, username: "PawPrints", imageUrl: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2024/02/26/65dc9491d9506.jpeg?w=550&h=309&crop=1", seen: false },
]

// Configuración ajustable
const STORIES_CONFIG = {
  VISIBLE_STORIES: 7,
  STORIES_TO_SCROLL: 3,
  ANIMATION_DURATION: 300,
  STORY_WIDTH: 80
}

export function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < stories.length - STORIES_CONFIG.VISIBLE_STORIES

  const handleNext = () => {
    if (isAnimating || !canScrollRight) return

    const nextIndex = Math.min(
      currentIndex + STORIES_CONFIG.STORIES_TO_SCROLL,
      stories.length - STORIES_CONFIG.VISIBLE_STORIES,
    )

    setIsAnimating(true)
    setCurrentIndex(nextIndex)

    if (scrollContainerRef.current) {
      const scrollAmount = nextIndex * STORIES_CONFIG.STORY_WIDTH

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })

      setTimeout(() => setIsAnimating(false), STORIES_CONFIG.ANIMATION_DURATION)
    }
  }

  const handlePrev = () => {
    if (isAnimating || !canScrollLeft) return

    const prevIndex = Math.max(currentIndex - STORIES_CONFIG.STORIES_TO_SCROLL, 0)

    setIsAnimating(true)
    setCurrentIndex(prevIndex)

    if (scrollContainerRef.current) {
      const scrollAmount = prevIndex * STORIES_CONFIG.STORY_WIDTH

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })

      setTimeout(() => setIsAnimating(false), STORIES_CONFIG.ANIMATION_DURATION)
    }
  }

  // Calcular el progreso para la barra
  const totalSegments = Math.max(1, stories.length - STORIES_CONFIG.VISIBLE_STORIES)
  const progress = Math.min(currentIndex / totalSegments, 1)

  // Calcular el ancho exacto para mostrar solo el número de historias visibles
  const containerWidth = STORIES_CONFIG.VISIBLE_STORIES * STORIES_CONFIG.STORY_WIDTH

  return (
    <div className="relative">
      <div className="flex justify-center mb-3">
        <div className="w-full max-w-md h-1 bg-purple-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-400 dark:bg-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <div 
        className="relative mx-auto px-12" 
        style={{ 
          width: `${containerWidth + 100}px`,
          maxWidth: "100%" 
        }}
      > 
        {/* Contenedor de historias */}
        <div 
          className="overflow-hidden mx-auto" 
          style={{ width: `${containerWidth}px` }}
        >
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-hidden scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {stories.map((story) => (
              <div key={story.id} className="story-item flex-shrink-0">
                <StoryCircle imageUrl={story.imageUrl} username={story.username} seen={story.seen} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2" style={{ left: "0" }}>
          <Button
            variant="outline"
            size="icon"
            className={`bg-white dark:bg-purple-950 rounded-full shadow-md hover:bg-purple-100 dark:hover:bg-purple-700 transition-all duration-200 ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
            disabled={!canScrollLeft || isAnimating}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ right: "0" }}>
          <Button
            variant="outline"
            size="icon"
            className={`bg-white dark:bg-purple-950 rounded-full shadow-md hover:bg-purple-100 dark:hover:bg-purple-700 transition-all duration-200 ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={!canScrollRight || isAnimating}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

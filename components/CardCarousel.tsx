'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // For optimized images in Next.js

// Define the type for a single card's data
interface CardData {
  id: string;
  imageSrc: string;
  altText: string;
  description: string;
}

// Define props for the Carousel component
interface CardCarouselProps {
  cards: CardData[]; // Array of card data to display
  scrollSpeed?: number; // Optional: speed of the carousel in ms per 100px (higher value = slower)
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, scrollSpeed = 50 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    let animationFrameId: number;
    let startTime: DOMHighResTimeStamp;
    let currentScroll = 0;

    const animateScroll = (timestamp: DOMHighResTimeStamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (!isPaused) {
        // Calculate scroll amount based on elapsed time and speed
        // This makes the scroll speed consistent regardless of frame rate
        const scrollAmount = (elapsedTime / scrollSpeed); // Adjust denominator for speed control

        currentScroll += scrollAmount;

        // Reset scroll position when it reaches the end to create an infinite loop
        // We'll duplicate the cards visually for a smoother infinite loop effect
        // The actual scrollWidth might include duplicated items, so we need careful calculation
        // A simpler approach for continuous scroll is to just translate and reset
        
        // For a seamless loop, we need to clone elements.
        // A simpler CSS-only approach for infinite scroll is often better for performance,
        // but for hover-pause with JS control, we manage it here.
        
        // For demonstration, let's just scroll and reset without perfect cloning for simplicity.
        // For production, consider duplicating `cards` array or using a library.
        
        const maxScroll = carouselElement.scrollWidth / 2; // Rough estimate if content is duplicated
        if (currentScroll >= maxScroll) {
          currentScroll = 0; // Reset
        }
        carouselElement.scrollLeft = currentScroll;
      }
      startTime = timestamp; // Reset start time for next frame
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, scrollSpeed, cards.length]); // Depend on isPaused and scrollSpeed

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = (card: CardData) => {
    alert(`You clicked on: ${card.description} (ID: ${card.id})`);
    // In a real application, you might open a modal here, or navigate:
    // router.push(`/cards/${card.id}`);
  };

  // Duplicate cards to create a seamless infinite scroll effect
  const duplicatedCards = [...cards, ...cards]; 

  return (
    <div className="relative w-full overflow-hidden py-8 ">
      <div
        ref={carouselRef}
        className="flex space-x-6 px-4 pb-4 overflow-x-hidden scrollbar-hide"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`} // Use a combined key for duplicated items
            className="flex-shrink-0 w-80 border rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => handleCardClick(card)}
          >
            <div className="relative w-full h-48">
              <Image
                src={card.imageSrc}
                alt={card.altText}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-800 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
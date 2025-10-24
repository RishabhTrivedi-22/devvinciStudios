'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CardData {
  id: string;
  imageSrc: string;
  altText: string;
  description: string;
}

interface CardCarouselProps {
  cards: CardData[];
  scrollSpeed?: number;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, scrollSpeed = 50 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // useRef to keep track of the last animation frame timestamp
  const lastTimestampRef = useRef<DOMHighResTimeStamp>(0);
  // useRef to store the animation frame ID
  const animationFrameIdRef = useRef<number | null>(null);
  // useRef to store the current scroll position
  const currentScrollRef = useRef<number>(0);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    // We'll calculate the total width of one set of original cards
    // This is a bit tricky without rendering, so we'll rely on scrollWidth / 2 initially
    // or estimate it based on card width + gap. For now, scrollWidth / 2 is a good approximation.
    const getEffectiveMaxScroll = () => {
        // Assume all cards have same width (w-80 = 320px) and space-x-6 (24px)
        const cardWidth = 320;
        const gapWidth = 24;
        // Total width of one set of cards, including gaps.
        // Last card doesn't have a gap after it in the sequence.
        const oneSetWidth = cards.length * cardWidth + (cards.length > 0 ? (cards.length -1) * gapWidth : 0);
        return oneSetWidth;
    };
    
    // The actual scroll distance before content repeats for an infinite loop
    // Using oneSetWidth for a more accurate reset point.
    const resetPoint = getEffectiveMaxScroll();


    const animateScroll = (timestamp: DOMHighResTimeStamp) => {
      // Only proceed if not paused
      if (!isPaused) {
        // Calculate elapsed time since the last frame
        const deltaTime = timestamp - lastTimestampRef.current;
        
        // Ensure deltaTime is not too large (e.g., if tab was inactive)
        const clampedDeltaTime = Math.min(deltaTime, 100); // Max 100ms to prevent huge jumps

        // Calculate scroll amount. Higher scrollSpeed value = slower scroll
        const scrollAmount = (clampedDeltaTime / scrollSpeed);

        currentScrollRef.current += scrollAmount;

        // Reset scroll position for infinite loop effect
        // If the scroll position has passed the width of one set of original cards, reset it.
        if (currentScrollRef.current >= resetPoint) {
            currentScrollRef.current -= resetPoint; // Subtract one full set's width
            // A more robust reset might be currentScrollRef.current = currentScrollRef.current % resetPoint;
        }
        
        carouselElement.scrollLeft = currentScrollRef.current;
      }
      
      // Always update lastTimestampRef for the next frame calculation
      lastTimestampRef.current = timestamp;

      // Request the next frame
      animationFrameIdRef.current = requestAnimationFrame(animateScroll);
    };

    // Start the animation
    animationFrameIdRef.current = requestAnimationFrame(animateScroll);

    // Cleanup function
    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isPaused, scrollSpeed, cards.length]); // Re-run if paused state, speed, or number of cards changes


  // Handlers for mouse events
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = (card: CardData) => {
    alert(`You clicked on: ${card.description} (ID: ${card.id})`);
    // Example: router.push(`/cards/${card.id}`);
  };

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards]; 

  return (
    <div className="relative w-full overflow-hidden py-8 ">
      <div
        ref={carouselRef}
        className="flex space-x-6 px-4 pb-4 overflow-x-hidden scrollbar-hide"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Render duplicated cards */}
        {duplicatedCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex-shrink-0 w-80 border border-[1/2px] rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
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
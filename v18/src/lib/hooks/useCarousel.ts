"use client";

import { useState, useEffect } from "react";

export function useCarousel(cardCount: number, interval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
      }, interval);

      return () => clearInterval(timer); // Czyści timer po unmount
    }
  }, [isPaused, cardCount, interval]);

  return { currentIndex, setIsPaused };
}

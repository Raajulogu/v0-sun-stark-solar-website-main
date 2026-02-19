"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageSliderProps {
  images: ImageItem[];
  className?: string;
  autoSlide?: boolean;
  interval?: number;
}

export default function ImageSlider({
  images,
  className = "",
  autoSlide = true,
  interval = 4000,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const length = images?.length || 0;

  // Auto Slide
  useEffect(() => {
    if (!autoSlide || length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slideInterval);
  }, [length, autoSlide, interval]);

  if (!images || length === 0) return null;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-lg ${className}`}>
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.url}
            alt={img.alt || "Project image"}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Controls (only if multiple images) */}
      {length > 1 && (
        <>
          <button
            onClick={(e)=>{
                e.stopPropagation()
                prevSlide()
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={(e)=>{
                e.stopPropagation()
                nextSlide()
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                    e.stopPropagation()
                    setCurrent(i)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

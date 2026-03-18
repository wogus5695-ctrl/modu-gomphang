"use client";

import React, { useState, useRef, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({ before, after, alt = "시공 전후 비교" }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const newPosition = ((clientX - left) / width) * 100;
    setPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) handleMove(e.touches[0].clientX);
  };

  const startDragging = () => {
    isDragging.current = true;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none touch-none bg-gray-200"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={startDragging}
      onTouchStart={startDragging}
    >
      {/* After Image (Base) */}
      <img
        src={after}
        alt={`${alt} (After)`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} (Before)`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Handle Line */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl pointer-events-none z-10"
        style={{ left: `${position}%` }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-500/20">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-blue-600 rounded-full" />
            <div className="w-1 h-3 bg-blue-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white pointer-events-none z-20">
        BEFORE
      </div>
      <div className="absolute bottom-4 right-4 bg-blue-600/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white pointer-events-none z-20">
        AFTER
      </div>
    </div>
  );
}

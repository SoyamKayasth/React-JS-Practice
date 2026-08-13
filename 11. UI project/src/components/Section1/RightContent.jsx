import React from 'react'
import RightCard from './RightCard';
import { useRef, useEffect } from "react";


function RightContent({users}) {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      slider.scrollLeft += 1.3;

      // We've reached the end of the first set
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };
   
  useEffect(startAutoScroll);
   
  return (
    <div
      ref={sliderRef}
      onMouseLeave={startAutoScroll}
      onMouseEnter={stopAutoScroll}
      id="sliding"
      className="flex flex-nowrap overflow-x-auto
      [&::-webkit-scrollbar]:hidden
      gap-10 h-full w-2/3 p-6 rounded-r-full
      "
    >
      {/* First set */}
      {users.map((user, idx) => (
        <RightCard
          key={idx}
          id={idx}
          img={user.img}
          tag={user.tag}
          btnColor={user.btnColor}
        />
      ))}

      {/* Duplicate set */}
      {users.map((user, idx) => (
        <RightCard
          key={`duplicate-${idx}`}
          id={idx}
          img={user.img}
          tag={user.tag}
          btnColor={user.btnColor}
        />
      ))}
    </div>
  );
}

export default RightContent;
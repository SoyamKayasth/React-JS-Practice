import React from 'react'
import RightCard from './RightCard';
import { useRef } from "react";


function RightContent({users}) {


  return (
    <div
    
      id="sliding"
      className="flex flex-nowrap overflow-x-auto
      scroll-smooth
      [&::-webkit-scrollbar]:hidden
      gap-10 h-full w-2/3 p-6
      "
    >
      {users.map((user, idx) => (
        <RightCard key={idx} id={idx} img={user.img} tag={user.tag} />
      ))}
    </div>
  );
}

export default RightContent;
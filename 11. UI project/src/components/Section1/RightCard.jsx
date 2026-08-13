import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
 
 console.log(props);
  return (
    <div className="relative shrink-0 w-80 h-full rounded-4xl overflow-hidden">
      <img
        src={props.img}
        alt="image"
        className=" h-full w-full object-cover"
      />
   
        <RightCardContent tag = {props.tag} id = {props.id}/>
   
    </div>
  );
};

export default RightCard;

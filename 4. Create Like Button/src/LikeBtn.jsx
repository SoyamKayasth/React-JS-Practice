import { useState } from "react";

export default function LikeBtn() {
    let [isLike, setIsLike] = useState(false);
    let [clicks, setClicks] = useState(0);
    function toggle(){
         setIsLike(!isLike);
         setClicks((clicks) => clicks+1);
         console.log(isLike);
       }
    
    return (
        <div id = "center">
            <p onClick = {toggle} className="large">
                {isLike ?         
                  <i className="fa-solid fa-heart red"></i> :
                    <i className="fa-regular fa-heart"></i>
                  }
            </p>
            <p>{clicks}</p>
        </div>
    );
}
import { useState, useEffect } from "react";

export default function Counter(){
   
    const [countx , setCountx] = useState(0);
    const [county , setCounty] = useState(0);

     useEffect(() => {
        async function increase(){
        setTimeout( () => {   
        setCountx((currCount) => currCount + 1);
        console.log("Your page is rendered");
        } , 1000)
     }
     increase();
    }, [countx]);     
    
     useEffect(() => {
        function increase(){
        setTimeout( () => {   
        setCounty((currCount) => currCount + 1);
        } , 4000)
     }
     increase();
    }, [county]);   

    return(
        <div>
             <br />
             <br />
             <br />
            <button type="button" className="counter">Your Component is rendered {countx} times!</button>
         <br />
         <br />
         <p>Count y is increases after 4 seconds - {county}</p>

        </div>
    );
}
import { useState } from "react";

import "./form.css"


export default function ReviewForm(){

const [formData, setFormData] = useState({
      username: "",
      feedback: "",
      rating: 5,
});

  const onInputChange = (e) => {

  }


    return(
        <form className="form">
            <h2>Please Give Your Feedback:</h2>
            <div className="field">
             <label htmlFor="username">User:</label>
            <input type="text" name="username" id="username" value = {formData.username} onChange={onInputChange} placeholder="Enter your username"/>
                </div>

                <div className="field">
               <label htmlFor="feedback">Feedback:</label>
               <textarea name="feedback" id="" cols="30" rows="10" placeholder="Enter your comment here"></textarea> 
               </div>
               <div className="field">
                 <label htmlFor="rating">Rating:</label>

                 <input type="number" name="rating" id="rating" min={1} max={5}/>

               </div>

               <div className="field">
                <button type="submit" className="counter btn">Add My Comment</button>
               </div>
        </form>
    );
}
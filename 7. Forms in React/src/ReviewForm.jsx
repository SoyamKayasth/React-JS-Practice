import { useState } from "react";

import "./form.css"


export default function ReviewForm({ addReview }) {

  const [formData, setFormData] = useState({
    username: "",
    feedback: "",
    rating: 5,
  });
  const [isValid, setIsValid] = useState({
    username: true,
    feedback: true,
    rating: true,
  })

  const onInputChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValidity = {
      username: formData.username.trim() !== "",
      feedback: formData.feedback.trim() !== "",
      rating: true,
    };

    setIsValid(newValidity);

    if (!newValidity.username || !newValidity.feedback) {
      return;
    }

    addReview(formData);

    setFormData({
      username: "",
      feedback: "",
      rating: 5,
    });

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Please Give Your Feedback:</h2>
      <div className="field">
        <label htmlFor="username">User:</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={onInputChange} placeholder="Enter your username" />
        {!isValid.username && <span className="err">Please Enter your username</span>}
      </div>
      
      <div className="field">
        <label htmlFor="feedback">Feedback:</label>
        <textarea name="feedback" id="" cols="60" rows="3" placeholder="Enter your comment here" value={formData.feedback} onChange={onInputChange}></textarea>
        {!isValid.feedback && <span className="err">Please Enter your feedback </span>}
      </div>
      

      <div className="field">
        <label htmlFor="rating">Rating:</label>

        <input type="number" name="rating" id="rating" min={1} max={5} value={formData.rating} onChange={onInputChange} />

      </div>

      <div className="field">
        <button type="submit" className="counter btn">Add My Comment</button>
      </div>
    </form>
  );
}
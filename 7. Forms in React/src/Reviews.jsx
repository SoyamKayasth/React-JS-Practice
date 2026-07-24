import { useState } from "react";
import ReviewForm from "./ReviewForm";
import "./review.css"

export default function Reviews(){
const [reviews , setReviews] = useState([]);

const addReview = (review) => {
    setReviews((prevReviews) => {
        return [...prevReviews, review];
    });
}
return (
  <>
    <ReviewForm addReview={addReview} />

    <section className="reviewsSection">
      <header className="reviewsHeader">
        <h2>Customer Reviews</h2>
        <p>{reviews.length} Review{reviews.length > 1 ? "s" : ""}</p>
      </header>

      <div className="reviewsGrid">
        { reviews.length === 0 ? (
    <p className="emptyReview">No reviews yet. Be the first to leave one!</p>
  ) : (  reviews.map((review, idx) => (
          <article className="reviewCard" key={idx}>
            <div className="reviewTop">
              <h3>@{review.username}</h3>
              <span className="rating">
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p className="comment">
              {review.feedback || "No feedback provided."}
            </p>
          </article>
        ))
       )}
      </div>
    </section>
  </>
);

}
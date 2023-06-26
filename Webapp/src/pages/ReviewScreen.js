import React, { useState } from "react";
import "./ReviewScreen.css";

const ReviewScreen = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle submitting review to server
    console.log(`Submitted review with rating ${rating} and text "${review}"`);
    setReview("");
    setRating(0);
  };

  return (
    <div className="review-screen">
      <h1 className="review-screen__title">Leave a Review</h1>
      <form className="review-screen__form" onSubmit={handleSubmit}>
        <div className="review-screen__rating">
          <label className="review-screen__label" htmlFor="rating">
            Rating:
          </label>
          <select
            className="review-screen__select"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="0">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="review-screen__review">
          <label className="review-screen__label" htmlFor="review">
            Review:
          </label>
          <textarea
            className="review-screen__textarea"
            id="review"
            value={review}
            onChange={handleReviewChange}
            placeholder="Write your review here"
          ></textarea>
        </div>
        <button
          className="review-screen__submit"
          type="submit"
          disabled={rating === 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewScreen;
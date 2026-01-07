import React, { useState } from "react";
import { ReviewForm, ReviewList } from "./components";

function App() {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <div>
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;

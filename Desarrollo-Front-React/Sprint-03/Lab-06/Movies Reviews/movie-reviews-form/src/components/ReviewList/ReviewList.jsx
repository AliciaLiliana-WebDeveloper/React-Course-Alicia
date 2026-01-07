import React from "react";
import "./ReviewList.css";

function ReviewList({ reviews }) {
  if (reviews.length === 0) return <p>No hay reseñas aún.</p>;

  return (
    <div className="review-list">
      <h2>Reseñas Recibidas</h2>
      {reviews.map((r, i) => (
        <div key={i} className="review-card">
          <h3>{r.title} ({r.year})</h3>
          <p><strong>Recomendación:</strong> {r.recommend}</p>
          <p><strong>Géneros:</strong> {r.genres.join(", ")}</p>
          {r.comment && <p><strong>Comentario:</strong> {r.comment}</p>}
        </div>
      ))}
    </div>
  );
}

export default ReviewList;

import React from "react";
import { useForm } from "react-hook-form";
import "./ReviewForm.css";

const GENRES = ["Acción", "Comedia", "Drama", "Ciencia ficción", "Animación"];

function ReviewForm({ onAddReview }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    onAddReview(data);
    reset();
  };

  return (
    <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Reseña de Película</h2>

      {/* Título */}
      <div className="form-group">
        <label>Título de la película</label>
        <input
          type="text"
          {...register("title", {
            required: "El título es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" },
            maxLength: { value: 100, message: "Máximo 100 caracteres" },
          })}
        />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      {/* Año */}
      <div className="form-group">
        <label>Año de estreno</label>
        <input
          type="number"
          {...register("year", {
            required: "El año es obligatorio",
            min: { value: 1900, message: "El año debe ser ≥ 1900" },
          })}
        />
        {errors.year && <span className="error">{errors.year.message}</span>}
      </div>

      {/* Recomendación */}
      <div className="form-group">
        <label>¿La recomendarías?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Sí"
              {...register("recommend", { required: "Debes elegir una opción" })}
            />{" "}
            Sí
          </label>
          <label>
            <input
              type="radio"
              value="No"
              {...register("recommend", { required: "Debes elegir una opción" })}
            />{" "}
            No
          </label>
        </div>
        {errors.recommend && <span className="error">{errors.recommend.message}</span>}
      </div>

      {/* Géneros */}
      <div className="form-group">
        <label>Géneros</label>
        <div className="checkbox-group">
          {GENRES.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                value={genre}
                {...register("genres", { validate: (v) => v.length > 0 || "Selecciona al menos 1 género" })}
              />{" "}
              {genre}
            </label>
          ))}
        </div>
        {errors.genres && <span className="error">{errors.genres.message}</span>}
      </div>

      {/* Comentario */}
      <div className="form-group">
        <label>Comentario (opcional)</label>
        <textarea
          {...register("comment", {
            maxLength: { value: 500, message: "Máximo 500 caracteres" },
          })}
        />
        {errors.comment && <span className="error">{errors.comment.message}</span>}
      </div>

      <button type="submit">Añadir reseña</button>
    </form>
  );
}

export default ReviewForm;

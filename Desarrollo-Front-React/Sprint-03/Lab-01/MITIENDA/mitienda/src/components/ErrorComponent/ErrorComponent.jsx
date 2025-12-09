import React from "react";
import "./ErrorComponent.css";

const ErrorComponent = ({ error }) => {
  return (
    <div className="error-container">
      <h2>¡Oops! Ha ocurrido un error.</h2>
      <p>{error ? error.toString() : "Error desconocido."}</p>
    </div>
  );
};

export default ErrorComponent;

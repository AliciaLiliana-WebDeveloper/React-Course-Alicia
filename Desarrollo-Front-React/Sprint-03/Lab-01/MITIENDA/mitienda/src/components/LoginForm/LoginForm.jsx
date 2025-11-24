// LoginForm.jsx
import React from "react";
import "./LoginForm.css";
import useAuth from "../../hooks/useAuth";

const LoginForm = ({ onClose }) => {
  const { isLoggedIn, handleLogin, handleLogout, userData } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const email = form.email.value;

    if (nombre && email) {
      handleLogin({ name: nombre, email });
      form.reset();
      onClose(); // cerrar modal al hacer login
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input type="text" name="nombre" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="user-info">
            <p>¿Quieres cerrar sesión, {userData.name}?</p>
            <button
              onClick={() => {
                handleLogout();
                onClose(); // cerrar modal al hacer logout
              }}
              type="button"
            >
              Logout
            </button>
          </div>
        )}
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

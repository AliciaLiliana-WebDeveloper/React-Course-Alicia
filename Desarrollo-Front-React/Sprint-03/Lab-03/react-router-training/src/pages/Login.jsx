import { login } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Simulado</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
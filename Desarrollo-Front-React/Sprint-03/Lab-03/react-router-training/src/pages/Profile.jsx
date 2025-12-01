import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      <p>
        <Link to="settings">Go to Settings</Link>
      </p>

      {/* Ruta anidada */}
      <Outlet />
    </div>
  );
}
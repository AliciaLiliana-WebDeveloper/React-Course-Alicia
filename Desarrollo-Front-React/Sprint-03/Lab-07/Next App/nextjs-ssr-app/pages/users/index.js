import Link from "next/link";

export default function Users({ users }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Listado de Usuarios</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`}>{u.username}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Volver</button>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/users");
  const users = await res.json();

  return { props: { users } };
}

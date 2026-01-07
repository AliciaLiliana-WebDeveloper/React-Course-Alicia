import Link from "next/link";

export default function UserDetail({ user }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Nombre: {user.name.firstname} {user.name.lastname}</p>
      <Link href="/users">
        <button>Volver al listado</button>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  const user = await res.json();

  return { props: { user } };
}

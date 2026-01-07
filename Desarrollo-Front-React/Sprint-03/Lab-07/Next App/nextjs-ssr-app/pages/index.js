import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido a la App SSR</h1>
      <ul>
        <li><Link href="/products">Productos</Link></li>
        <li><Link href="/users">Usuarios</Link></li>
      </ul>
    </div>
  );
}

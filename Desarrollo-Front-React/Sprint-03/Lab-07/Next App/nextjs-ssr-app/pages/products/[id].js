import Link from "next/link";

export default function ProductDetail({ product }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      <Link href="/products">
        <button>Volver al listado</button>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

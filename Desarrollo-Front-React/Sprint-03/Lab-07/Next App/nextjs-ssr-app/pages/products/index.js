// pages/products/index.js
import Link from "next/link";
import styles from "../../styles/Products.module.css";

export default function Products({ products }) {
  return (
    <div className="container">
      <h1>Products</h1>

      {/* Botón volver a home */}
      <Link href="/">
        <button style={{
          marginBottom: "1.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#1a73e8",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 500,
        }}>
          ← Back to Home
        </button>
      </Link>

      <div className={styles["products-grid"]}>
        {products.map((product) => (
          <div key={product.id} className={styles["product-card"]}>
            <img
              src={product.image}
              alt={product.title}
              className={styles["product-image"]}
            />
            <h2 className={styles["product-title"]}>{product.title}</h2>
            <p className={styles["product-price"]}>${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className={styles["product-button"]}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// SSR
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}

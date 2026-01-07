function Album({ title, children }) {
    return (
      <section style={{ marginBottom: "30px" }}>
        <h2>{title}</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {children}
        </div>
      </section>
    );
  }
  
  export default Album;
  
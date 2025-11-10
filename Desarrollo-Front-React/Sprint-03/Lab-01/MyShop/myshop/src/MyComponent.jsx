import React from "react";
function MyComponent(){
    const containerStyle = {
        backgroundColor: "#f2f2f2",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "cenrer",
    }
    return (
        <div style={containerStyle}>
            <h2>Componentes con Estilos</h2>
            <p style={{color: "red" }}> Hola soy un parrafo</p>
        </div>
    );
}
export default MyComponent;
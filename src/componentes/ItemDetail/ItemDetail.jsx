import React from "react";


const ItemDetail = ({product}) => {

    return(
        <div className="catalogo">
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p>stock:{product.stock}</p>
            <p>Marca:{product.category}</p>
        </div>
    )
}

export default ItemDetail
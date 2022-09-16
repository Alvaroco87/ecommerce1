import React from 'react';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({ product }) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        alert(`Se agrego la cantidad ${cantidad} al carrito`);
    }

    return (
        <div className="detail-container">
            <img className="detail-img" alt='product-detail' src={product.image} />
            <div className="detail-subcontainer">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">
                    {product.description}
                </p>
                <p className="product-price">
                    Precio: {product.price}$
                </p>
                <div className='count-container'>
                <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
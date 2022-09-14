import React from 'react';
import ItemCount from '../ItemCount';
// import Card from "react-bootstrap/Card";
import './styles.css';

const ItemDetail = ({ product }) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        alert(`Se agrego la cantidad ${cantidad} al carrito`);
    }

    return (
        <div className="card-container">
            <img className="card-img" alt='img' src={product.image} width={400} />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">
                    {product.description}
                </p>
                <p className="card-text">
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
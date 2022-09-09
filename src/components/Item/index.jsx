import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import './styles.css';

const Item = ({ product }) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        alert(`Se agrego la cantidad ${cantidad} al carrito`);
    }

    return (
        <Card className="card-container" style={{ width: "18rem" }}>
            <Card.Img className="card-img" variant="top" src="" />
            <Card.Body className="card-body">
                <Card.Title className="card-title">{product.name}</Card.Title>
                <Card.Text className="card-text">
                    {product.price}$
                </Card.Text>
            </Card.Body>
            <ItemCount initial={1} stock={product.stock} onAdd={agregarAlCarrito} />
        </Card>
    );
};

export default Item;

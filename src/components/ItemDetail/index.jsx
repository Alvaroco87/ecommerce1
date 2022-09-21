import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const addCart = (quantity) => {
        setQty(quantity);
    };

    const handleFinish = () => {
        navigate('/cart');
    }

    console.log(qty);

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
                {qty ? (
                <button onClick={handleFinish}>Finalizar compra</button>
                ) : (
                <ItemCount initial={1} stock={10} onAdd={addCart} />
                )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
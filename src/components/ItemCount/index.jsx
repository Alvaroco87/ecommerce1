import React from "react";
import { useState } from "react";
import "./styles.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BsCartPlusFill } from "react-icons/bs";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("No hay suficiente stock");
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    };

    return (
        <div>
            <div className="counter">
                <IoIosRemoveCircleOutline className="counter-icon" onClick={decrement} />
                <p className="counter-number">{count}</p>
                <IoIosAddCircleOutline className="counter-icon" onClick={increment} />
            </div>
            <div className="add-cart">
                <button onClick={addCart}>
                    Agregar al carrito <BsCartPlusFill />
                </button>
            </div>
        </div>
    );
};

export default ItemCount;

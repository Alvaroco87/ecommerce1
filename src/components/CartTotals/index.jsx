import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import './styles.css';

const CartTotals = () => {

  const {totalPrice} = useContext(Shop);

  return (
    <div className='cart-totals'>
      <p>Total: {totalPrice().toFixed(2)}€</p>
    </div>
  )
}

export default CartTotals;
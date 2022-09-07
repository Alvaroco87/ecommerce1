import React from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import './styles.css';

const CartWidget = () => {
  return (
    <div className='shopping-cart'>
        <HiShoppingCart size={30} />
    </div>
  )
}

export default CartWidget;
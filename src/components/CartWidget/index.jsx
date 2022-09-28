import React from 'react';
import { useContext } from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import './styles.css';
import { Shop } from '../../context/CartContext';

const CartWidget = () => {

  const {totalProducts} = useContext(Shop);

  return (
    <div className='shopping-cart'>
        <HiShoppingCart size={30} />
        {totalProducts() !== 0 
        ? <div>
          {totalProducts()}
        </div>
        : ""}
    </div>
  )
}

export default CartWidget;
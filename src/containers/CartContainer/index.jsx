import React from 'react';
// import { useContext } from 'react';
// import { Shop } from '../../context/CartContext';
// import { DataGrid } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
import CartItems from '../../components/CartItems';
import CartTotals from '../../components/CartTotals';

const Cart = () => {

    return (
      <div>
        <CartItems />
        <CartTotals />
      </div>
    );
  }

export default Cart;
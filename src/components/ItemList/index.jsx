import React from 'react';
import Item from '../Item';
import './styles.css';

const ItemList = ({products}) => {
  return (
    <div className='container'>
        {products.length
        ? products.map(product => {
            return <Item key={product.id} product={product} />
        })
        : <p>Cargando</p>
        }
    </div>
  )
}

export default ItemList
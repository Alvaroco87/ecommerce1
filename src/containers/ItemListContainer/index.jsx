import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import {products} from '../../data/products';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    
    (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 2000);
    })

        try {
          const productos = await obtenerProductos;
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

    })()

  }, [])

  console.log(productos);

  return (
    <div className='item-list-container'>
        <h2>{greeting}</h2>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;
import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
// import {products} from '../../data/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams();

  useEffect(()=> {
    (async ()=> {
        try {
          if (categoryId){
            const response = await fetch(
              `https://fakestoreapi.com/products/category/${categoryId}`
            )
            const productos = await response.json();
            setProductos(productos);
          }
          else {
            const response = await fetch(
              "https://fakestoreapi.com/products"
            );
            const productos = await response.json();
            setProductos(productos);
          }
        } catch (error) {
          console.log(error);
        }

    })()

  }, [categoryId])

  console.log(productos);

  return (
    <ItemList products={productos}/>
  )
}

export default ItemListContainer;
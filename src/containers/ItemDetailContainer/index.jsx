import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    useEffect(() => {
        const getProducts = async () => {

            try {

                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProductDetail({id: docSnap.id, ...docSnap.data()});
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    return <ItemDetail product={productDetail} />
}

export default ItemDetailContainer;
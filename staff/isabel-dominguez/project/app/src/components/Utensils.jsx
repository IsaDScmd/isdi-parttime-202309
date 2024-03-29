import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function Utensils({ favProducts, onSuccess }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProductsByType('Utensils')
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, []);

    return (
        <div>
            <div className="products">{products.map(product => (<Product key={product.id} {...product} favProducts={favProducts} onSuccess={onSuccess} />))}</div>
        </div>
    )
}
import React from 'react';
import product_list from '../../Product_List';
import Card from '../Card/Card';
import './Products.css';

const Products = () => {
    const { productItems } = product_list;

    return (
        <div className="products">
            {productItems.map((product) => (
                <Card key={product.id} itemId={product.id} name={product.name} price={product.price} image={product.image} />
            ))}
        </div>
    )
}

export default Products;
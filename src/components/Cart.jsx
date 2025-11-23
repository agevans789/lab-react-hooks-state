import react from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';

const Cart = ({products, onAddToCart}) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>
            ))}
        </div>
    );
};

export default Cart;

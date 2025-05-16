import React, { useEffect, useState } from 'react';
import Header from './Header';
import Subheader from './Subheader';
import ProductList from './ProductList';
import Button from './Button';
import '../styles/Cart.scss';

function Cart() {
    const [cart, setCart] = useState(null);
    const [initialCart, setInitialCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
            const response = await fetch('https://dummyjson.com/carts?limit=3');
            const data = await response.json();
            const allProducts = data.carts.flatMap(cart => cart.products).slice(0, 6);
            const cartData = { products: allProducts };
            setCart(cartData);
            setInitialCart(cartData);
            setLoading(false);
            } catch (err) {
            setError('Failed to load cart.');
            setLoading(false);
            }
        };

        fetchCart();
    }, []);


    const handleRemove = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            products: prevCart.products.filter((item) => item.id !== id),
        }));
    };

    const handleReset = () => {
        setCart(initialCart);
    };

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="cart">
            <Header />
            <Subheader products={cart.products} />
            <ProductList products={cart.products} onRemove={handleRemove} />
            <Button onClick={handleReset} type={'reset'}>Reset</Button>
        </div>
    );
}

export default Cart;

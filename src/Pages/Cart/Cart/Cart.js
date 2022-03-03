import React from 'react';
import { Link } from 'react-router-dom';
import CartFood from '../CartFood/CartFood';
import "./Cart.css";

const Cart = () => {
    // const [cart] = useCart();
    const unparsedCart = localStorage.getItem("shopping_cart");
    const cart = JSON.parse(unparsedCart);

    return (
        <div className="cart section-padding">
            <h1>This are {cart.length} items in cart!</h1>
            <div className="cart-food-container">
                {
                    cart?.map?.(cartFood => <CartFood cartFood={cartFood}/>)
                }
            </div>
            <Link to="/checkout"><button className="checkout-btn">Checkout Your Food</button></Link>
        </div>
    );
};

export default Cart;
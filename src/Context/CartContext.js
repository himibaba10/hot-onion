import React, { createContext, useState } from 'react';

export const ContextCart = createContext();

const CartContext = ({children}) => {
    const existingCart = localStorage.getItem("shopping_cart");
    const parsedExistingCart = JSON.parse(existingCart);
    const [cart, setCart] = useState(parsedExistingCart || []);
    return (
        <ContextCart.Provider value = {[cart, setCart]}>
            {children}  
        </ContextCart.Provider>
    );
};

export default CartContext;
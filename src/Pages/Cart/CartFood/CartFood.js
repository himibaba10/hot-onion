import React from 'react';
import UseData from '../../../hooks/UseData';
import "./CartFood.css";

const CartFood = ({cartFood}) => {
    const [foods] = UseData();

    const foodDetail = foods?.find?.(food => food?.name === cartFood?.name);
    if(foodDetail){
        foodDetail.quantity = cartFood?.quantity;
    }

    const {name, quantity, price, imageURL, category} = foodDetail || {};
    return (
        <div className="cart-food">
            <div className="cart-food-img">
                <img src={imageURL} alt={imageURL} />
            </div>
            <div className="cart-food-description">
            <h2>Food Name: {name}</h2>
            <h4>Price: {price}</h4>
            <h5>Category: {category}</h5>
            <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
};

export default CartFood;
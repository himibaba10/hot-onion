import React from 'react';
import useCart from '../../../hooks/useCart';
import UseData from '../../../hooks/UseData';
import CheckoutFood from '../CheckoutFood/CheckoutFood';
import "./Checkout.css";

const Checkout = () => {
    const [cart] = useCart();
    const [foods] = UseData();
    console.log(cart);
    console.log(foods);

    const foodDetail = cart?.map(food => foods.find(cartFood => cartFood.name === food.name));

    const subtotal = foodDetail?.reduce?.((total, food)=> food.quantity * food.price , 0);

    console.log(subtotal);

    console.log(foodDetail)
    return (
        <div className="checkout section-padding">
            <div className="checkout-form">
                <h2>Edit Delivery Details</h2>
                <form>
                <hr />
                    <input type="text" name="Name" placeholder="Name"/>
                    <input type="email" name="Email" placeholder="Email"/>
                    <input type="text" name="Address" placeholder="Address"/>
                    <input type="text" name="Flat/Suite/Floor" placeholder="Flat/Suite/Floor"/>
                    <input type="text" name="Business Name" placeholder="Business Name"/>
                    <input type="text" name="Delivery Instructor" placeholder="Delivery Instructor"/>
                    <input type="submit" value="Save and Continue" id="checkout-btn"/>
                </form>
            </div>
            <div className="checkout-cart">
                <h4>From Dhaka</h4>
                <p>Ariving at 20-30 minute</p>
                <p>Address</p>
                <div className="checkout-food-container">
                    {
                        cart?.map?.(food => <CheckoutFood food={food}/>)
                    }
                </div>
                <div className="checkout-price-container">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>${subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${(subtotal*0.02).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Delivery fee</td>
                            <td>$2</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${(subtotal+(subtotal*0.02)+2).toFixed(2)}</td>
                        </tr>
                    </table>
                </div>
                <button className="place-order-btn">Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
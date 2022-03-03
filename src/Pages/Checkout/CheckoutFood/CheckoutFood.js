import React from "react";
import UseData from "../../../hooks/UseData";
import "./CheckoutFood.css";

const CheckoutFood = ({ food }) => {
  const [foods] = UseData();

  const foodDetail = foods?.find?.((fd) => fd.name === food.name);
  foodDetail.quantity = food.quantity;

  // const totalItems = foodDetail?.reduce?.((total, food)=> food?.quantity ,0)

  const { name, quantity, price, imageURL } = foodDetail;

  // const { name, photoURL, price } = food;
  return (
    <div className="checkout-food">
      <div className="checkout-food-img-container">
        <img src={imageURL} alt={imageURL} />
      </div>
      <div className="checkout-food-detail">
        <h5>{name}</h5>
        <h3>{price}</h3>
      </div>
      <div className="checkout-food-quantity">
          <h3>{quantity}</h3>
      </div>
    </div>
  );
};

export default CheckoutFood;

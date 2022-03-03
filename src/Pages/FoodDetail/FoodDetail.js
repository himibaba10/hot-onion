import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "../../hooks/useCart";
import UseData from "../../hooks/UseData";
import Food from "../Home/Food/Food";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { foodName } = useParams();
  const [cart, setCart] = useCart();

  const [quantity, setQuantity] = useState(1);
  // const existingCart = localStorage.getItem("shopping_cart");
  // console.log(existingCart);

  const [foods] = UseData();
  const currentFood = foods?.find?.((food) => food?.name === foodName);
  const { name, imageURL, price, category } = currentFood || {};

  const foodCategory = foods?.filter?.(
    (food) => food?.category === category && food?.name !== foodName
  );

  const handleAddFood = (foodName, quantity) => {
    const food = {name:foodName, quantity:quantity};
    const existingFood = cart?.find(cartFood => cartFood.name === food.name);
    if(existingFood){
      const restFood = cart.filter(cartFood => cartFood.name !== existingFood.name )
      existingFood.quantity = quantity;
      setCart([...restFood, existingFood]);
    }
    else{
      setCart([...cart, food]);
    }
  }
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
  return currentFood ? (
    <div className="section-padding">
      <div className="food-detail">
        <div className="food-description">
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            molestias odit deserunt possimus, dolor praesentium, illum nesciunt
            quae voluptatum laudantium accusantium id quos cumque rerum sequi
            molestiae ipsam, mollitia numquam!
          </p>
          <h2>${price}</h2>
          <span className="product-quantity">
            <span
              className="product-quantity-decrease"
              onClick={() => !(quantity < 2) && setQuantity(quantity - 1)}
            >
              -
            </span>
            <span>{quantity}</span>
            <span
              className="product-quantity-increase"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </span>
          </span>
          <button className="add-to-cart-button" onClick={() => handleAddFood(name, quantity)}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginRight: "7px" }}
            />{" "}
            Add
          </button>
        </div>
        <div className="food-img-container">
          <img src={imageURL} alt={imageURL} />
        </div>
      </div>
      <div className="related-food">
        <h1>Related Foods</h1>
        <div className="food-container">
          {
              foodCategory.slice(2)?.map?.(food => <Food food={food}/>)
          }
      </div>
      </div>
    </div>
  ) : (
    <>
      <div>The food you are looking is not found</div>
      
    </>
  );
};

export default FoodDetail;

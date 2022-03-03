import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseData from "../../../hooks/UseData";
import Food from "../Food/Food";
import "./Foods.css";


const Foods = () => {

  const [foods] = UseData();

  const [getCategory, setGetCategory] = useState("breakfast");
  const food = foods?.filter?.(food => food?.category === (getCategory));

  return (
    <section className="foods section-padding">
      <div className="filter-foods">
        <a href="#breakfast" onClick={e => setGetCategory(e.target.innerText.toLowerCase())}>Breakfast</a>
        <a href="#lunch" onClick={e => setGetCategory(e.target.innerText.toLowerCase())}>Lunch</a>
      </div>
      <div className="food-container">
        {
          food?.map?.(food => <Food key={food.name} food={food}/>)
        }
      </div>
      <Link to="/checkout"><button className="checkout-btn">Checkout Your Food</button></Link>
    </section>
  );
};

export default Foods;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Food.css";

const Food = ({food}) => {
    const {name, imageURL, price} = food;
    return (
        <Link to={`/food/${name}`}><div className="food">
            <div className="food-img-container">
                <img src={imageURL} alt="" />
            </div>
            <h1>{name}</h1>
            <p>How we dream about future</p>
            <h5>${price}</h5>

        </div>
        </Link>
    );
};

export default Food;
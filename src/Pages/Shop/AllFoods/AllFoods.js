import React from 'react';
import UseData from '../../../hooks/UseData';
import Food from '../../Home/Food/Food';
import "./AllFoods.css";

const AllFoods = () => {
    const [foods] = UseData();
    return (
        <>
            <div className="shop-img-container">
                Welcome to our food menu
            </div>
            <div className="food-container section-padding">
            {
                foods?.map?.(food => <Food food={food}/>)
            }
        </div>
        </>
    );
};

export default AllFoods;
import React from 'react';
import "./Service.css";

const Service = ({service}) => {
    const {title, imageURL, description, icon} = service;
    return (
        <div className="service">
            <div className="service-img-container">
                <img src={imageURL} alt={imageURL} />
                <div className="service-detail-container">
                    <img src={icon} alt="" />
                    <div className="service-detail">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
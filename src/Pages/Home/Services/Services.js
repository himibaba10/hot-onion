import React from 'react';
import icon1 from "../../../images/ICON/icon1.png";
import icon2 from "../../../images/ICON/icon2.png";
import icon3 from "../../../images/ICON/icon3.png";
import service1 from "../../../images/Image/service1.png";
import service2 from "../../../images/Image/service2.png";
import service3 from "../../../images/Image/service3.png";
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {

    const servicesData = [
        {title: "Fast Delivery", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit sequi odit tempore neque commodi fugiat provident magni optio corrupti!", imageURL: service1, icon: icon1},
        {title: "A Good Auto Responder", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit sequi odit tempore neque commodi fugiat provident magni optio corrupti!", imageURL: service2, icon: icon2},
        {title: "Home Delivery", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit sequi odit tempore neque commodi fugiat provident magni optio corrupti!", imageURL: service3, icon: icon3},
    ];

    return (
        <div className="services section-padding">
            <h1>Why you choose us</h1>
            <p>
                There are so many reasons to choose us.<br/>
                Some are given below:
            </p>
            <div className="service-container">
                {
                    servicesData.map(service => <Service service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;
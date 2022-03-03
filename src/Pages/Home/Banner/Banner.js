import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
        <h1 className="banner-text">Best food waiting for your belly</h1>
        <h1 className="banner-text-small">Best food waiting for<br></br>your belly</h1>
        <form>
          <input type="text" placeholder="Search food items" />
          <input type="submit" value="Search" />
        </form>
    </div>
  );
};

export default Banner;

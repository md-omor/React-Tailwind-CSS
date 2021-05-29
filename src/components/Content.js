import React from "react";
import image1 from "../images/egg.jpg";
import image2 from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={image1} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-contect">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={image2} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-contect">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
    </>
  );
};

export default Content;

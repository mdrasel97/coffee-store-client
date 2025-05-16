import React from "react";
import iconImage1 from "../assets/icons/1.png";
import iconImage2 from "../assets/icons/2.png";
import iconImage3 from "../assets/icons/3.png";
import iconImage4 from "../assets/icons/4.png";

const IconSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-11/12 mx-auto p-5 bg-secondary">
        <div>
          <img src={iconImage1} alt="" />
          <h3 className="text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={iconImage2} alt="" />
          <h3 className="text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={iconImage3} alt="" />
          <h3 className="text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={iconImage4} alt="" />
          <h3 className="text-2xl">Awesome Aroma</h3>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconSection;

import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const oneId = useLoaderData();
  // console.log(oneId);
  const { name, photo, price } = oneId;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

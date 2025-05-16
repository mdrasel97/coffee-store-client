import React, { useState } from "react";
import Banner from "./Banner";
import IconSection from "./IconSection";
import FollowIns from "./FollowIns";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  // console.log(coffees);
  return (
    <div>
      <Banner />
      <IconSection />
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-5 my-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
      <FollowIns />
    </div>
  );
};

export default Home;

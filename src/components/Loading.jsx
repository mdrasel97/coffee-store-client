import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <RingLoader color="#ac0707" />
    </div>
  );
};

export default Loading;

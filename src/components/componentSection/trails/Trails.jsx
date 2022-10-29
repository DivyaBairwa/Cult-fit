import React from "react";
import "./trails.css";

export const Trails = () => {
  return (
    <div className="width-1200">
      <h1 className="text-5xl  ">Free Trails</h1>
      <p className="text-3xl my-10 text-gray-500 ">
        Experience free workouts at any cultpass gym
      </p>
      <div className="flex">
        <div className="ticket">
          <h1>01</h1>
          <button>TRY FOR FREE</button>
        </div>
        <div className="ticket mx-10 ">
          <h1>02</h1>
          <button>TRY FOR FREE</button>
        </div>
      </div>
    </div>
  );
};

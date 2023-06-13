import React, { useState } from "react";

export const DailyButton = (props) => {
  const { daily, api } = props;
  const label = Object.keys(daily)[0];
  const completed =
    new Date(Object.values(daily)[0]).getDay() === new Date().getDay()
      ? true
      : false;

  const handleClick = () => {
    console.log("click");
  };

  const handleCompleted = () => {
    console.log("completed");
  };

  return (
    <button
      disabled={completed}
      onClick={handleClick}
      className={`rounded-md w-[300px] py-3 mb-[3px] shadow-lg ${
        completed ? "bg-green-400" : "bg-orange-300"
      }`}
    >
      <div className="flex justify-between">
        <div></div>
        <p className="font-bold translate-x-3">
          {label[0].toUpperCase() + label.substring(1)}
        </p>
        <input readOnly type="checkbox" checked={completed} className="mr-3" />
      </div>
    </button>
  );
};

export default DailyButton;

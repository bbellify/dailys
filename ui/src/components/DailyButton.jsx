import React from "react";
import { deleteIcon } from "../icons";

export const DailyButton = (props) => {
  const { daily, api, setDeleteOpen, deleteOpen, addOpen } = props;

  const isCompleted = (daily) => {
    const date = new Date();
    const dailyDate = new Date(Object.values(daily)[0]);
    return (
      dailyDate.getDay() === date.getDay() &&
      dailyDate.getFullYear() === date.getFullYear()
    );
  };

  const handleClick = () => {
    const action = completed ? "undo" : "complete";
    api.poke({
      app: "dailys",
      mark: "dailys-action",
      json: {
        [action]: {
          "daily-key": label,
        },
      },
    });
  };

  const handleDelete = () => {
    api.poke({
      app: "dailys",
      mark: "dailys-action",
      json: {
        del: {
          "daily-key": label,
        },
      },
    });
  };

  const label = Object.keys(daily)[0];
  const completed = isCompleted(daily);

  return (
    <div className="flex w-full justify-between align-middle mb-[3px]">
      <div className="w-1/5"></div>
      <div className={`${deleteOpen ? "animate-wiggle" : ""}`}>
        <button
          disabled={deleteOpen || addOpen}
          onClick={handleClick}
          className={`rounded-md w-[300px] py-3 shadow-lg ${
            completed
              ? "bg-green-400 active:bg-green-500 disabled:active:bg-green-400"
              : "bg-orange-300 active:bg-green-300 disabled:active:bg-orange-300"
          }`}
        >
          <p className="font-bold">
            {label[0].toUpperCase() + label.substring(1)}
          </p>
        </button>
      </div>
      {deleteOpen ? (
        <div className="flex w-1/5">
          <button className="px-2 pb-1" onClick={handleDelete}>
            {deleteIcon()}
          </button>
        </div>
      ) : (
        <div className="w-1/5"></div>
      )}
    </div>
  );
};

export default DailyButton;

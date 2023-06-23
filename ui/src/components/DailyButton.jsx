import React, { useState } from "react";
import { deleteIcon } from "../icons";

export const DailyButton = (props) => {
  const { daily, api, deleteOpen, addOpen } = props;
  const [deleteButtonColor, setDeleteButtonColor] = useState("fill-blue-600");

  const isCompleted = (daily) => {
    const date = new Date();
    const dailyDate = new Date(Object.values(daily)[0]);
    return (
      dailyDate.getDay() === date.getDay() &&
      dailyDate.getMonth() === date.getMonth() &&
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

  const handleActiveDelete = () => {
    setDeleteButtonColor("fill-blue-400");
  };

  const handleInactiveDelete = () => {
    setDeleteButtonColor("fill-blue-600");
  };

  const label = Object.keys(daily)[0];
  const completed = isCompleted(daily);

  return (
    <div className="flex w-full justify-evenly mb-[3px]">
      <div className="w-1/5"></div>
      <div
        className={`flex w-3/5 min-w-[300px] justify-center ${
          deleteOpen ? "animate-shake" : ""
        }`}
      >
        <button
          disabled={deleteOpen || addOpen}
          onClick={handleClick}
          className={`flex justify-center rounded-md w-full py-3 shadow-lg ${
            completed
              ? "bg-green-400 active:bg-green-500 disabled:active:bg-green-400"
              : "bg-orange-300 active:bg-green-300 disabled:active:bg-orange-300"
          }`}
        >
          <p className="font-bold overflow-scroll">
            {label[0].toUpperCase() + label.substring(1)}
          </p>
        </button>
      </div>
      {deleteOpen ? (
        <div className="w-1/5 -translate-y-1 flex justify-center">
          <button
            className="p-2 px-3"
            onMouseDown={handleActiveDelete}
            onMouseUp={handleInactiveDelete}
            onMouseLeave={handleInactiveDelete}
            onClick={handleDelete}
          >
            {deleteIcon(deleteButtonColor)}
          </button>
        </div>
      ) : (
        <div className="w-1/5"></div>
      )}
    </div>
  );
};

export default DailyButton;

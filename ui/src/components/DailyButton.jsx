import React from "react";

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
    <div className="flex">
      <button
        disabled={deleteOpen || addOpen}
        onClick={handleClick}
        className={`rounded-md w-[300px] py-3 mb-[3px] shadow-lg ${
          completed
            ? "bg-green-400 active:bg-green-500 disabled:active:bg-green-400"
            : "bg-orange-300 active:bg-green-300 disabled:active:bg-orange-300"
        }`}
      >
        <div className="flex justify-between">
          <div></div>
          <p className="font-bold translate-x-3">
            {label[0].toUpperCase() + label.substring(1)}
          </p>
          <input
            readOnly
            type="checkbox"
            checked={completed}
            className="mr-3"
          />
        </div>
      </button>
      {deleteOpen && <button onClick={handleDelete}>del</button>}
    </div>
  );
};

export default DailyButton;

import React, { useState } from "react";
import { closeIcon } from "../icons";

export const AddButton = (props) => {
  const { addOpen, setAddOpen, api, deleteOpen } = props;
  const [newDaily, setNewDaily] = useState("");

  const handleChange = (e) => {
    setNewDaily(e.target.value);
  };

  const handleAdd = () => {
    api
      .poke({
        app: "dailys",
        mark: "dailys-action",
        json: {
          add: {
            "daily-key": newDaily,
          },
        },
      })
      .then(() => {
        setNewDaily("");
        setAddOpen(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      return handleClose();
    }
    if (e.keyCode === 13) {
      if (newDaily.length) return handleAdd();
    }
  };

  const handleClose = () => {
    setNewDaily("");
    setAddOpen(false);
  };

  const addDisabled = deleteOpen ? true : addOpen ? !newDaily : false;

  return (
    <div className="flex flex-col">
      <button
        disabled={addDisabled}
        onClick={!addOpen ? () => setAddOpen(true) : () => handleAdd()}
        className="bg-green-200 text-middle rounded-md w-[300px] py-3 mt-[10px] shadow-lg active:bg-green-300 disabled:bg-green-100"
      >
        {addOpen ? (
          <p
            className={`font-bold ${
              addOpen && !newDaily ? "text-blue-300" : ""
            }`}
          >
            save
          </p>
        ) : (
          <p
            className={`font-bold ${
              addDisabled ? "text-blue-300" : "text-blue-500"
            }`}
          >
            +
          </p>
        )}
      </button>
      {addOpen && (
        <div className="flex justify-between bg-green-100 text-middle rounded-md w-[300px] py-3 mt-[10px] shadow-lg">
          <div className="w-1/6"></div>
          <input
            autoFocus
            className="bg-green-100 text-center focus:none focus:outline-none font-bold placeholder:text-blue-300"
            placeholder="new daily here"
            value={newDaily}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <div className="flex w-1/6 justify-center">
            <button className="font-bold" onClick={handleClose}>
              {closeIcon()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;

import React, { useState } from "react";

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

  return (
    <div className="flex flex-col">
      {addOpen && (
        <div className="flex justify-between bg-green-100 text-middle rounded-md w-[300px] py-3 mt-[3px] shadow-lg">
          <div className="w-1/6"></div>
          <input
            className="bg-green-100 text-center focus:none focus:outline-none"
            placeholder="new daily here"
            value={newDaily}
            onChange={handleChange}
          />
          <button className="w-1/6 font-bold" onClick={() => setAddOpen(false)}>
            x
          </button>
        </div>
      )}
      <button
        disabled={deleteOpen ? true : addOpen ? !newDaily : false}
        onClick={!addOpen ? () => setAddOpen(true) : () => handleAdd()}
        className="bg-green-100 text-middle rounded-md w-[300px] py-3 mt-[10px] shadow-lg active:bg-green-300 disabled:bg-green-100"
      >
        {addOpen ? (
          <p
            className={`font-bold ${
              addOpen && !newDaily ? "text-gray-300" : ""
            }`}
          >
            save
          </p>
        ) : (
          <p className="font-bold">+</p>
        )}
      </button>
    </div>
  );
};

export default AddButton;

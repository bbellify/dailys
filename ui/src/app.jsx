import React, { useEffect, useState } from "react";
import Urbit from "@urbit/http-api";
import DailyButton from "./components/DailyButton";
import AddButton from "./components/AddButton";
import { menuIcon, closeIcon } from "./icons";

const api = new Urbit("", "", window.desk);
api.ship = window.ship;

export const App = () => {
  const [dailys, setDailys] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [menuButtonColor, setMenuButtonColor] = useState("fill-blue-600");

  useEffect(() => {
    api.subscribe({
      app: "dailys",
      path: "/updates",
      event: handleEvent,
    });
  }, []);

  const handleEvent = (e) => {
    if (e.dailys) {
      return setDailys(e.dailys);
    }
  };

  const handleActiveMenu = () => {
    setMenuButtonColor("fill-blue-400");
  };

  const handleInactiveMenu = () => {
    setMenuButtonColor("fill-blue-600");
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex-col bg-yellow-100 pb-8 min-h-screen w-full sm:max-w-[500px] shadow-lg">
        <div className="flex w-full justify-between align-middle">
          <div className="w-1/6"></div>
          <h1 className="text-4xl font-bold pt-10 text-center pb-8">%dailys</h1>
          <div className="flex justify-center items-center w-1/6">
            <button
              className="w-fit px-3 py-2"
              disabled={addOpen}
              onMouseDown={handleActiveMenu}
              onMouseUp={handleInactiveMenu}
              onMouseLeave={handleInactiveMenu}
              onClick={() => setDeleteOpen(!deleteOpen)}
            >
              {deleteOpen
                ? closeIcon(menuButtonColor)
                : menuIcon(addOpen, menuButtonColor)}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {Array.isArray(dailys) &&
            dailys.map((daily, i) => {
              return (
                <DailyButton
                  daily={daily}
                  api={api}
                  key={i}
                  setDeleteOpen={setDeleteOpen}
                  deleteOpen={deleteOpen}
                  addOpen={addOpen}
                />
              );
            })}
          <AddButton
            setAddOpen={setAddOpen}
            addOpen={addOpen}
            api={api}
            deleteOpen={deleteOpen}
          />
        </div>
        <h1 className="text-md italic font-bold text-center mt-4">
          do your dailys
        </h1>
      </div>
    </main>
  );
};

export default App;

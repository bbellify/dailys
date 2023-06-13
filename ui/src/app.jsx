import React, { useEffect, useState } from "react";
import Urbit from "@urbit/http-api";
import DailyButton from "./components/DailyButton";
import AddButton from "./components/AddButton";

const api = new Urbit("", "", window.desk);
api.ship = window.ship;

export const App = () => {
  const [dailys, setDailys] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

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

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex-col bg-yellow-100 min-h-screen w-full sm:max-w-[400px] relative">
        <button
          disabled={addOpen}
          className="absolute top-0 right-0 m-2"
          onClick={() => setDeleteOpen(!deleteOpen)}
        >
          delete button
        </button>

        <div className="flex flex-col">
          <h1 className="text-4xl font-bold pt-10 text-center pb-8">%dailys</h1>
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

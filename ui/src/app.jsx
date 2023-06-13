import React, { useEffect, useState } from "react";
import Urbit from "@urbit/http-api";
import { scryCharges } from "@urbit/api";
import DailyButton from "./components/DailyButton";
import SkeletonButton from "./components/SkeletonButton";

const api = new Urbit("", "", window.desk);
api.ship = window.ship;

export function App() {
  const [dailys, setDailys] = useState([]);

  const dummyDailys = [
    { run: null },
    { pushups: null },
    { AG1: null },
    { "guitar scales": new Date() },
    { "one more thing": null },
    { "another thing": null },
  ];

  useEffect(() => {
    async function init() {
      const charges = (await api.scry(scryCharges)).initial;
      // setApps(charges);
    }

    init();
  }, []);

  const newDailys = dummyDailys.map((daily) => {
    return Object.keys(daily)[0] === "run" ? { run: new Date() } : daily;
  });

  useEffect(() => {
    setTimeout(() => {
      setDailys(newDailys);
    }, 3000);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex-col bg-yellow-100 min-h-screen w-full sm:max-w-[400px]">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold pt-10 text-center">%dailys</h1>
          <h1 className="text-md italic font-bold py-3 text-center mb-1">
            do your dailys
          </h1>
        </div>
        <div className="flex flex-col items-center">
          {/* maybe skip the skeleton buttons, see how loading actually looks in prod */}
          {dailys.length ? (
            dailys.map((daily, i) => {
              return <DailyButton daily={daily} api={api} key={i} />;
            })
          ) : (
            <>
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
              <SkeletonButton />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

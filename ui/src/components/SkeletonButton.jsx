import React, { useState } from "react";

export const SkeletonButton = () => {
  return (
    // rounded-md w-[300px] py-3
    <button className="animate-pulse bg-yellow-300 text-right rounded-md w-[300px] py-3 mb-[3px]">
      <p>.</p>
      {/* <div className="flex justify-between">
        <div></div>
        <div className="w-10 bg-red-400">.</div>
        <input type="checkbox" readOnly className="bg-slate-600 mr-2" />
      </div> */}
    </button>
  );
};

export default SkeletonButton;

import React from "react";

export const deleteIcon = (buttonColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 ${buttonColor}`}
      viewBox="0 0 512 512"
    >
      <path
        d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z"
        fill="none"
      />
      <path d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z" />
    </svg>
  );
};

export const menuIcon = (addOpen, buttonColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 ${buttonColor} ${addOpen ? "active:fill-blue-600" : ""}`}
      viewBox="0 0 512 512"
    >
      <circle cx="256" cy="256" r="48" />
      <circle cx="416" cy="256" r="48" />
      <circle cx="96" cy="256" r="48" />
    </svg>
  );
};

export const closeIcon = (buttonColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 ${buttonColor}`}
      viewBox="0 0 512 512"
    >
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
};

export const addIcon = (buttonColor) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6"
      color={buttonColor}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="50"
        d="M256 112v288M400 256H112"
      />
    </svg>
  );
};

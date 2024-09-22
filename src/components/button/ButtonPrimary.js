import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-5 px-12 lg:px-16 text-white font-semibold rounded-lg bg-green-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-500 text-white bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white transition-all hover:shadow-green ">
      {children}
    </button>
  );
};

export default ButtonOutline;

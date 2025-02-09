import React from "react";

export const LinkButton = ({ text, link, type }) => {
  return (
    <a
      href={link}
      className={`block text-center font-medium rounded transition-all duration-300 ease-in-out transform
        ${
          type === "primary"
            ? "bg-black text-white py-3 px-6 hover:px-10 hover:shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:scale-105"
            : "border border-black text-black py-3 px-6 hover:px-10 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:scale-105"
        }`}
    >
      {text}
    </a>
  );
};

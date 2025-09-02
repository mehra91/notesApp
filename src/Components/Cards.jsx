import React from "react";
import { MdDelete } from "react-icons/md";

const Cards = ({ reciveData, onDelete }) => {
  return (
    <div className="relative w-80 p-4 rounded-2xl shadow-lg bg-gray-800 text-white">
      <h2 className="text-lg font-semibold mb-2">
        {reciveData?.title || "Title"}
      </h2>
      <p className="text-sm mb-4 break-words whitespace-pre-wrap line-clamp-4">
        {reciveData?.body || ""}
      </p>

      <div className="flex items-center gap-2">
        <span
          className={`h-3 w-3 rounded-full ${
            reciveData?.priority === "Important"
              ? "bg-yellow-500"
              : reciveData?.priority === "Most Important"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        ></span>
        <span className="text-xs">{reciveData?.priority || "Normal"}</span>
      </div>

      <div
        className="absolute bottom-3 right-3 cursor-pointer text-gray-400 hover:text-red-500"
        onClick={onDelete} // parent ko notify kare
      >
        <MdDelete size={20} />
      </div>
    </div>
  );
};

export default Cards;

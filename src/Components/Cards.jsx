import React, { useState } from "react";
import { BsPinAngle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Cards = ({ reciveData }) => {
         
    const[popUp,setPopUp] = useState(false);
        const genrateMsg = () =>{
            setPopUp (true)
         
 
        };
        

  return (
    <div className="relative w-80 p-4 rounded-2xl shadow-lg bg-gray-800 text-white">
      {/* <button className="absolute top-3 right-3">
        <BsPinAngle size={25} />
      </button> */}

      <h2 className="text-lg font-semibold mb-2">
        {reciveData?.title || "Title"}
      </h2>
      <p className="text-sm mb-4 break-words whitespace-pre-wrap line-clamp-4">
        {reciveData?.body ||
          " "}
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
      <div className="absolute bottom-3 right-3 cursor-pointer text-gray-400 hover:text-red-500">
        <MdDelete size={20} onClick={genrateMsg} >
            

        </MdDelete>
          
      </div>
      { popUp && (
             
             <div className="bg-green-700 absolute  p-2  top-20  left-100   flex flex-col items-center justify-center h-20 w-full rounded-3xl " >
                <p className="text-lg text-white mb-2 " >
                    Are you Sure to Delete note ?
                    
                </p>
                <div className="flex-row-reverse items-center ">
                    <button type="submit" className="flex cursor-pointer border items-center justify-center h-fit w-10" >
                    yes
                </button>
                <button type="submit" className="flex  cursor-pointer border items-center justify-center h-fit w-lg" >
                    no
                </button>
                </div>
             </div>
       ) }; 
    </div>
  );
};

export default Cards;

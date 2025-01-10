import React from "react";
import { FaPlusCircle, FaRegTrashAlt } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const BasketCard = ({ data, clickHandler }) => {
  return (
    <div className="relative flex-col    rounded-xl  overflow-hidden p-3 mb-4">
      <div className=" flex">
        <div className=" flex flex-col w-3/5 ">
          <div className="flex items-center justify-center bg-[#e2e2e2] ">
            <img src={data.image} alt={data.title} className="h-3/4" />
          </div>

          <div className="flex flex-col justify-center h-1/4">
            <button
              className=" flex items-center justify-center w-full mt-3 px-4 h-7 
            bg-black text-white text-nowrap text-xs rounded-sm hover:bg-[#b5b6b6]"
            >
              <LuFileSearch className="mr-2" />
              <Link to={`/book/${data.id}`}>Click to Preview</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between p-4 w-3/4">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <div className="flex font-semibold flex-row my-2">
            <p className="text-sm mr-1">by</p>
            <p className="text-sm text-[#2BB9D2]">{data.author}</p>
          </div>
          <p className="text-sm font-semibold text-gray-700">
            {data.description}
          </p>
          <div className="flex  justify-between items-center w-full pt-3 ">
            <div>
              <p className="flex justify-center items-center">
                <p className="font-bold mr-2 text-sm">Quantiy:</p>
                <span>{data.quantity}</span>
              </p>
              <div className="flex justify-center">
                {" "}
                <p className="flex text-sm font-bold text-gray-800">
                  Total: ${data.price * data.quantity} <p className="text-gray-500"></p>
                </p>
              </div>
            </div>
            <button
              onClick={() => clickHandler("REMOVE-ITEM", data)}
              className="w-10 h-10 rounded-full flex justify-center items-center "
            >
              <FaRegTrashAlt className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default BasketCard;

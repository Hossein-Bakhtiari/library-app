import React from "react";
import Card from "./Card";
import book from "../constant/book";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Circles from "../constant/circles";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useBookDetails } from "../context/BookContext";
import BasketCard from "./BasketCard";
import TotalPurches from "./TotalPurches";

const CheckingOutPage = () => {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  console.log(state);
  return (
    <div className=" relative flex items-center justify-center bg-[#ebeaea]">
      <div className="relative   h-full w-full  bg-[#ffffff] p-4">
        {/* <circles /> */}
        <div className="sm:hidden absolute top-[-20px] left-[-90px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[-80px] left-[-10px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[240px] left-[-80px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[100px] right-[-90px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[900px] left-[-80px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[700px] right-[-90px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>

        {/* buttons*/}
        <div className="relative flex justify-between items-center mb-4 mx-2">
          <div className="flex flex-row ">
            <button className="flex items-center bg-[#89C9D4] px-6 py-2 font-semibold rounded-3xl">
              <Link to={"/book-list"}>Back</Link>
            </button>
            <div className="ml-2 flex items-center justify-center rounded-full bg-[#89C9D4] w-10 h-10">
              <Link to={"/checkout"}>
                <FaShoppingCart />
              </Link>
              {!!state.itemsCounter && (
                <span className="flex justify-center text-sm w-5 h-5 bg-black text-white rounded-full absolute top-[-5px] left-[120px] ">
                  {state.itemsCounter}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center rounded-full bg-[#89C9D4] w-10 h-10">
              <FaUser />
            </div>
            <button className="bg-[#89C9D4]  px-6 py-2 rounded-3xl font-semibold">
              <Link to={"/login"}> Log Out</Link>
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div class="relative mx-3 my-5">
            <TotalPurches state={state} clickHandler={clickHandler} />
          {/* <input
            type="text"
            placeholder="Search Books"
            class="w-full shadow-lg placeholder:font-semibold px-4 py-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.24 16.24a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z"
              />
            </svg>
          </button> */}
        </div>
        <div>
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckingOutPage;

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
    <div className=" relative flex h-fit  items-center justify-center bg-[#ebeaea]">
      <div className="relative overflow-x-clip  h-full w-full  bg-[#ffffff] p-4">
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

        <div class="relative mx-3 my-5">
          <TotalPurches state={state} clickHandler={clickHandler} />
        </div>
        <div className="relative flex-col  bg-white shadow-2xl rounded-xl  overflow-hidden p-3 mb-4">
          {/* {!!state.itemsCounter && (
            <h2 className="text-center  text-xl font-bold mb- ">
              Your Purchases
            </h2>
          )} */}
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
          {!!state.itemsCounter && (
            <button
              type="submit"
              className="w-full my-2 py-3 font-semibold bg-[#2BB9D2] text-white rounded-3xl shadow-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
            >
              <Link to={"/book-List"}>Payment Method</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckingOutPage;

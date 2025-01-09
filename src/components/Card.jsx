import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { productQuantity } from "../../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";

const Card = ({ book }) => {
  const [state, dispatch] = useCart();
  const quantity = productQuantity(state , book.id);
  // console.log(quantity)

  const clickHandler = (type) => {
    dispatch({ type, payload: book });
  };

  return (
    <div className="flex bg-white shadow-2xl rounded-xl  overflow-hidden p-3 mb-4">
      <div className=" flex flex-col w-3/5 ">
        <div className="flex items-center justify-center bg-[#e2e2e2] ">
          <img src={book.image} alt={book.title} className="h-3/4" />
        </div>

        <div className="flex flex-col justify-center h-1/4">
          <button
            className=" flex items-center justify-center w-full mt-3 px-4 h-7 
            bg-black text-white text-nowrap text-xs rounded-sm hover:bg-[#b5b6b6]"
          >
            <LuFileSearch className="mr-2" />
            <Link to={`/book/${book.id}`}>Click to Preview</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 w-3/4">
        <h2 className="text-lg font-bold">{book.title}</h2>
        <div className="flex font-semibold flex-row my-2">
          <p className="text-sm mr-1">by</p>
          <p className="text-sm text-[#2BB9D2]">{book.author}</p>
        </div>
        <p className="text-sm font-semibold text-gray-700">
          {book.description}
        </p>
        <div className="flex flex-row mt-2 justify-end items-center w-50 ">
          {/* <button
            onClick={() => clickHandler("ADD_ITEM")}
            className="w-10 h-10 rounded-full flex justify-end items-end "
          >
            <FaPlusCircle className="w-7 h-7 " />
          </button> */}
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE-ITEM")}>
              <MdDeleteOutline className="w-5 h-5 mr-5"/>
            </button>
          )}
          {quantity > 1 && (
            <button className="text-3xl mr-5" onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          {!!quantity && <span className="mr-4 text-xl font-bold">{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <FaPlusCircle className="w-6 h-6 " />
            </button>
          ) : (
            <button className="text-2xl" onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

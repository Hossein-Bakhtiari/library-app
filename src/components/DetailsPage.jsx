import React from "react";
import { Link, useParams } from "react-router-dom";
import { useBookDetails } from "../context/BookContext";
import { FaPlusCircle, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const DetailsPage = () => {
  const { id } = useParams();
  const bookDetails = useBookDetails(+id);
  console.log(bookDetails);
  
  const [state] = useCart();
  return (
    <div className=" relative flex items-center justify-center bg-[#ebeaea]">
      <div className="relative overflow-hidden  w-full h-full bg-[#ffffff] p-4">
        {/* <circles /> */}
        <div className="sm:hidden absolute top-[-20px] left-[-90px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[-80px] left-[-10px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[240px] left-[-80px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[100px] right-[-90px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute bottom-[-30px] right-[-90px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute bottom-[-90px] right-[-10px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
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
              {!!state.itemsCounter && <span className="flex justify-center text-sm w-5 h-5 bg-black text-white rounded-full absolute top-[-5px] left-[120px] " >{state.itemsCounter}</span>}

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
        {/* <div class="relative mx-3 my-5">
          <input
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
          </button>
        </div> */}

        <div className="relative bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto my-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Book*/}
            <div className="flex flex-row justify-center rounded-xl  overflow-hidden ">
              <div className="flex flex-row w-2/5 mr-2">
                <div className="flex items-center justify-center  ">
                  <img
                    src={bookDetails.image}
                    alt={bookDetails.title}
                    className=""
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between p-4 w-3/4">
                <h2 className="text-lg font-bold">{bookDetails.title}</h2>
                <div className="flex font-semibold flex-row my-2">
                  <p className="text-sm mr-1">by</p>
                  <p className="text-sm text-[#2BB9D2]">{bookDetails.author}</p>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  {bookDetails.description}
                </p>
              </div>
            </div>

            {/* Product Description*/}
            <div className="flex-1">
              <p className="text-gray-600 mb-4">by {bookDetails.author}</p>

              <h2 className="text-lg font-semibold mt-4 mb-2">
                Product Description
              </h2>
              <p className="text-gray-700 mb-4">
                {bookDetails.product_description}
              </p>

              <p className="text-gray-500 text-sm mb-2">
                <span className="font-semibold">Publication Date:</span>{" "}
                {bookDetails.publicationDate}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <span className="font-semibold">Product :</span>{" "}
                {bookDetails.id}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                <span className="font-semibold">Pages:</span>{" "}
                {bookDetails.pages}
              </p>
            </div>
          </div>

          {/* Price and buttons*/}
          <div className="mt-6 border-t pt-4">
            <p className="text-xl font-bold text-gray-800 mb-2">
              ${bookDetails.price} (USD)
            </p>
            <div className="flex gap-4 items-center mb-4 flex-wrap">
              <div>
                <label className="text-sm font-semibold block mb-1">
                  Formats:
                </label>
                <select className="border px-3 py-2 rounded-md">
                  <option>Ebook</option>
                  <option>Hardcover/Hardcopy</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">
                  Languages:
                </label>
                <select className="border px-3 py-2 rounded-md">
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">
                  Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border px-3 py-2 rounded-md w-16"
                />
              </div>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded-md font-bold shadow-md hover:bg-red-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

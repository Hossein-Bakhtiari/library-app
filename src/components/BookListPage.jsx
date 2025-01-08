import React from "react";
import Card from "./Card";
import book from "../constant/book";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Circles from "../constant/circles";
const BookListPage = () => {
  return (
    <div className=" relative flex items-center justify-center bg-[#ebeaea]">
      <div className="relative overflow-hidden  w-full h-full bg-[#ffffff] p-4">
        {/* <circles /> */}
        <Circles />

        {/* buttons*/}
        <div className="relative flex justify-between items-center mb-4 mx-2">
          <div className="flex flex-row ">
            <button className="flex items-center bg-[#89C9D4] px-6 py-2 font-semibold rounded-3xl">
              Back
            </button>
            <div className="ml-2 flex items-center justify-center rounded-full bg-[#89C9D4] w-10 h-10">
              <FaShoppingCart />
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center rounded-full bg-[#89C9D4] w-10 h-10">
              <FaUser />
            </div>
            <button className="bg-[#89C9D4]  px-6 py-2 rounded-3xl font-semibold">
              Log Out
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div class="relative mx-3 my-5">
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
        </div>

        {/* لیست کتاب‌ها */}
        <div className="relative px-3">
          {book.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookListPage;

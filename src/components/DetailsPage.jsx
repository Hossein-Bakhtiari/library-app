import React from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../context/BookContext";

const DetailsPage = () => {
  const { id } = useParams();
  const bookDetails = useBookDetails(+id);
  console.log(bookDetails.id);
  return (
    <div>
      {/* <p>{bookDetails.title}</p> */}
    </div>
  );
};

export default DetailsPage;

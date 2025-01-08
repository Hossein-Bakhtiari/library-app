import { createContext, useContext, useEffect, useState } from "react";
import book from "../constant/book";
const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setBooks(book);
      } catch (error) {
        console.log(error.message)
      }
      
    };
    fetchBooks();
  }, []);
  return <BookContext.Provider value={books}>{children}</BookContext.Provider>;
};

const useBookDetails = (id) => {
  const books = useContext(BookContext);
  const result = books.find((book) => book.id === id);
  return result;
};

export default BookProvider;
export { useBookDetails };

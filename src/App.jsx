import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import BookInfo from "./components/BookListPage";
import BookListPage from "./components/BookListPage";
import DetailsPage from "./components/DetailsPage";
import BookProvider from "./context/BookContext";
import CartProvider from "./context/CartContext";
import CheckingOutPage from "./components/CheckingOutPage";

function App() {
  return (
    <CartProvider>
      <BookProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} replace />
          <Route path="/login" element={<Login />} />
          <Route path="/book-list" element={<BookListPage />} />
          <Route path="/book/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckingOutPage />} />
        </Routes>
      </BookProvider>
    </CartProvider>
  );
}

export default App;

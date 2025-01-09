import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import BookInfo from "./components/BookListPage";
import BookListPage from "./components/BookListPage";
import DetailsPage from "./components/DetailsPage";
import BookProvider from "./context/BookContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BookProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} replace />
          <Route path="/login" element={<Login />} />
          <Route path="/book-list" element={<BookListPage />} />
          <Route path="/book/:id" element={<DetailsPage />} />
        </Routes>
      </BookProvider>
    </CartProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/create-book";
import ShowBook from "./pages/show-books";
import DeleteBook from "./pages/delete-book";
import EditBook from "./pages/edit-book";
import { Spinner } from "./components/Spinner";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/spinner" element={<Spinner />} />
    </Routes>
  );
}

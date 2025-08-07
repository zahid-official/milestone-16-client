import MainLayout from "@/layouts/MainLayout";
import AddBook from "@/pages/addBook/AddBook";
import Allbooks from "@/pages/allBooks/Allbooks";
import BookDetails from "@/pages/allBooks/bookDetails/BookDetails";
import Home from "@/pages/home/Home";
import UpdateBook from "@/pages/allBooks/updateBook/UpdateBook";
import { createBrowserRouter } from "react-router";
import BorrowBook from "@/pages/allBooks/borrowBook/BorrowBook";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/books",
        Component: Allbooks,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/edit-book/:id",
        Component: UpdateBook,
      },
      {
        path: "/borrow/:id",
        Component: BorrowBook,
      },
    ],
  },
]);

export default Router;

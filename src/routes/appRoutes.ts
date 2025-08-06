import MainLayout from "@/layouts/MainLayout";
import AddBook from "@/pages/addBook/AddBook";
import Allbooks from "@/pages/allBooks/Allbooks";
import BookDetails from "@/pages/bookDetails/BookDetails";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

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
    ],
  },
]);

export default Router;

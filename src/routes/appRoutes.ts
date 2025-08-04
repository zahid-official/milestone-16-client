import MainLayout from "@/layouts/MainLayout";
import AddBook from "@/pages/addBook/AddBook";
import Allbooks from "@/pages/allBooks/Allbooks";
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
        path: "/addBook",
        Component: AddBook,
      },
      {
        path: "/allBooks",
        Component: Allbooks,
      },
    ],
  },
]);

export default Router;

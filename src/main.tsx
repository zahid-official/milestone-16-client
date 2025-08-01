import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./routes/appRoutes.ts";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ThemeProvider } from "./providers/theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

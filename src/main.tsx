import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./routes/appRoutes.ts";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ThemeProvider } from "./providers/theme/ThemeProvider.tsx";
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>
        <TooltipProvider>
          <RouterProvider router={Router} />
          <Toaster />
        </TooltipProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

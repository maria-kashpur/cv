import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import LangProvider from "./providers/LangProvider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>
);

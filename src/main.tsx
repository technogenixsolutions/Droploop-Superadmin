import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { cn } from "./lib/utils.ts";
import router from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className={`${cn({
        "debug-screens": process.env.NODE_ENV === "development",
      })} font-roboto`}
    >
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);

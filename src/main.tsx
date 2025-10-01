import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { HeroUIProvider } from "@heroui/react";
import { RouterProvider } from "react-router-dom"; // لو عايز تستخدم Router
import router from "./routes/routs.tsx";

createRoot(document.getElementById("root")!).render(
  // main.tsx
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  </StrictMode>
);

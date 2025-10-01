import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../App";

// Lazy loading للصفحات

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading please wait...</p>}>
        <App />
      </Suspense>
    ),
  },
]);

export default router;

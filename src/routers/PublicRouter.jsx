import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Checkout from "../pages/products/Checkout";
import Payment from "../pages/products/Payment";
import ReviewOrder from "../pages/products/ReviewOrder";

export const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />,
        index: true,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/checkout/payment",
        element: <Payment />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/checkout/payment/review-order",
        element: <ReviewOrder />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

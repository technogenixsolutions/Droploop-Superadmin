import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "@/routes";
import Login from "@/page/Login";
import SignUp from "@/page/SignUp";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardHome from "@/page/DashboardHome";
import ProductList from "@/page/ProductList";
import DraftProducts from "@/page/DraftProducts";
import MyProducts from "@/page/MyProducts";
import Profile from "@/page/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: `${ROUTES.DASHBOARD.HOME}`,
        element: <DashboardHome />,
      },
      {
        path: `${ROUTES.DASHBOARD.FIND_PRODUCTS}`,
        element: <ProductList />,
      },
      {
        path: `${ROUTES.DASHBOARD.DRAFT_PRODUCTS}`,
        element: <DraftProducts />,
      },
      {
        path: `${ROUTES.DASHBOARD.MY_PRODUCTS}`,
        element: <MyProducts />,
      },
      {
        path: `${ROUTES.DASHBOARD.PROFILE}`,
        element: <Profile />,
      },
    ],
  },
  {
    path: `${ROUTES.LOG_IN}`,
    element: <Login />,
  },
  {
    path: `${ROUTES.SIGN_UP}`,
    element: <SignUp />,
  },
]);

export default router;

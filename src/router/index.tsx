import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "@/routes";
import Login from "@/page/Login";
import SignUp from "@/page/SignUp";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardHome from "@/page/DashboardHome";
import ConnectMyStore from "@/page/ConnectMyStore";
import ProductList from "@/components/product/ProductList";
import MyProducts from "@/components/my-product/MyProducts";
import DraftProducts from "@/components/draft-product/DraftProducts";
import Orders from "@/components/Orders";
import Support from "@/components/Support/Support";
import Profile from "@/components/Profile";

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
        path: `${ROUTES.DASHBOARD.CONNECT_STORE}`,
        element: <ConnectMyStore />,
      },
      {
        path: `${ROUTES.DASHBOARD.FIND_PRODUCTS}`,
        element: <ProductList />,
      },
      // {
      //   path: `${ROUTES.DASHBOARD.MY_STORE}`,
      //   element: <MyStore />,
      // },
      {
        path: `${ROUTES.DASHBOARD.DRAFT_PRODUCTS}`,
        element: <DraftProducts />,
      },
      {
        path: `${ROUTES.DASHBOARD.MY_PRODUCTS}`,
        element: <MyProducts />,
      },
      {
        path: `${ROUTES.DASHBOARD.ORDERS}`,
        element: <Orders />,
      },
      {
        path: `${ROUTES.DASHBOARD.PROFILE}`,
        element: <Profile />,
      },
      // {
      //   path: `${ROUTES.DASHBOARD.PRODUCT_DETAILS.STATIC}`,
      //   element: <ProductDetails />,
      // },
      // {
      //   path: `${ROUTES.DASHBOARD.CUSTOMER_LIST}`,
      //   element: <Customers />,
      // },
      // {
      //   path: `${ROUTES.DASHBOARD.TRANSACTIONS}`,
      //   element: <Transactions />,
      // },
      // {
      //   path: `${ROUTES.DASHBOARD.ROLES}`,
      //   element: <Roles />,
      // },
      {
        path: `${ROUTES.DASHBOARD.SUPPORT_TICKET}`,
        element: <Support />,
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

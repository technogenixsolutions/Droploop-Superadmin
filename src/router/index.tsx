import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "@/routes";
import { ProtectedRoute } from "@/layout/PrivateRoute";
import App from "@/App";
import Login from "@/page/Login";
import SignUp from "@/page/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    // children: [
    //   {
    //     path: `${ROUTES.DASHBOARD.HOME}`,
    //     element: <DashboardHome />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.CONNECT_STORE}`,
    //     element: <ConnectMyStore />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.FIND_PRODUCTS}`,
    //     element: <ProductList />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.MY_STORE}`,
    //     element: <MyStore />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.DRAFT_PRODUCTS}`,
    //     element: <DraftProducts />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.MY_PRODUCTS}`,
    //     element: <MyProducts />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.ORDERS}`,
    //     element: <Orders />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.PROFILE}`,
    //     element: <Profile />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.PRODUCT_DETAILS.STATIC}`,
    //     element: <ProductDetails />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.CUSTOMER_LIST}`,
    //     element: <Customers />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.TRANSACTIONS}`,
    //     element: <Transactions />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.ROLES}`,
    //     element: <Roles />,
    //   },
    //   {
    //     path: `${ROUTES.DASHBOARD.SUPPORT_TICKET}`,
    //     element: <Support />,
    //   },
    // ],
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

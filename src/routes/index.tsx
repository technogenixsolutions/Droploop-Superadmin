export const ROUTES = {
  HOME: '/',
  LOG_IN: '/login',
  SIGN_UP: '/sign-up',
  FORGET_PASSWORD: '/forget-password',
  SETUP_NEW_PASSWORD: '/setup-new-password',
  UNAUTHORIZED: '/unauthorized',
  DASHBOARD: {
    HOME: `/dashboard`,
    FIND_PRODUCTS: `/dashboard/find-products`,
    CONNECT_STORE: `/dashboard/connect-store`,
    MY_STORE: `/dashboard/my-store`,
    DRAFT_PRODUCTS: `/dashboard/draft-products`,
    MY_PRODUCTS: `/dashboard/my-products`,
    ORDERS: `/dashboard/orders`,
    PROFILE: `/dashboard/profile`,
    PRODUCT_DETAILS: {
      STATIC: `/dashboard/product/:id`,
      DYNAMIC: (id: string, supplier: string) =>
        `/dashboard/product/${id}?supplier=${supplier}`,
    },
    CUSTOMER_LIST: `/dashboard/customers`,
    TRANSACTIONS: `/dashboard/transactions`,
    ROLES: `/dashboard/roles`,
    SUPPORT_TICKET: `/dashboard/support-ticket`,
  },
} as const;

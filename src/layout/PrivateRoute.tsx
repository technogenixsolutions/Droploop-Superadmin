import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = Cookies.get('refreshToken');
  if (!token) {
    return <Navigate to={ROUTES.LOG_IN} replace />;
  }

  return children;
}

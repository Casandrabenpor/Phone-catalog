import { Navigate } from 'react-router-dom';
import { isUserLogged } from './features/listSlice/loginSlice/loginSlice';
import { useTypedSelector } from './app/store';
import React from 'react';

export const ProtectedRoute = ({ children }: any) => {
  const logged = useTypedSelector(isUserLogged);

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

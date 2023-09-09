import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './proctectedRoute';
import { AdminPage } from './pages/adminPage';
import React from 'react';
import { CreatePage } from './pages/createPage';
import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';
import { DetailsPage } from './pages/detailsPhonePage';
import { ShopPage } from './pages/shopPage';

function App() {
  return (
    <Routes>
      <Route
        index
        path="/admin/phones"
        element={
          <ProtectedRoute>
            {' '}
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        index
        path="/admin/phone/create"
        element={
          <ProtectedRoute>
            {' '}
            <CreatePage />
          </ProtectedRoute>
        }
      />
      <Route
        index
        path="/admin/purchases"
        element={
          <ProtectedRoute>
            {' '}
            <ShopPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details/*" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;

import React from 'react';

import { Footer } from '../components/Footer/footer';
import { Nav } from '../components/Nav/nav';
import { ShopPhones } from '../components/Admin/shopPhones';
export const ShopPage = () => {
  return (
    <>
      <Nav />
      <ShopPhones title="Purchases" />
      <Footer />
    </>
  );
};

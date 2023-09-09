import React from 'react';
import { Nav } from '../components/Nav/nav';
import { CardsPhones } from '../components/Home/cardPhones';
import { Footer } from '../components/Footer/footer';
import { AsideCart } from '../components/Nav/asideCart';

export const AdminPage = () => {
  return (
    <>
      <Nav />
      <AsideCart />
      <CardsPhones title="👩‍💻 Welcome Casandra!" isAdmin={true} />
      <Footer />
    </>
  );
};

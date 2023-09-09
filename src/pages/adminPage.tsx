import React from 'react';
import { Nav } from '../components/Nav/nav';
import { CardsPhones } from '../components/Home/cardPhones';
import { Footer } from '../components/Footer/footer';

export const AdminPage = () => {
  return (
    <>
      <Nav />
      <CardsPhones title="👩‍💻 Welcome Casandra!" isAdmin={true} />
      <Footer />
    </>
  );
};

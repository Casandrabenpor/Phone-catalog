import React from 'react';
import { Nav } from '../components/Nav/nav';
import { CardsPhones } from '../components/Home/cardPhones';
import { Footer } from '../components/Footer/footer';

export const HomePage = () => {
  return (
    <>
      <Nav />
      <CardsPhones title="Phone list with cards" isAdmin={false} />
      <Footer />
    </>
  );
};

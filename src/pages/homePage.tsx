import React from 'react';
import { Nav } from '../components/nav';
import { ListPhones } from '../components/Home/listPhones';
export const HomePage = () => {
  return (
    <>
      <Nav />
      <ListPhones title="Phone list with cards" />
    </>
  );
};

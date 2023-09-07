import React, { useEffect, useState } from 'react';
import { Details } from '../../styles/listStyled/detailsStyled';
import { Link } from 'react-router-dom';

export const DetailsPhone = () => {
  return (
    <Details>
      <Link to="/">X</Link>
      {/* <p>
        <img src={phone.photoUrl} alt={phone.name} />
      </p>
      <p>
        <strong>Name: {phone.name}</strong>
      </p>
      <p>
        <strong>Description: {phone.description}</strong>
      </p>
      <p>
        <strong>Price {phone.price}</strong>
      </p> */}
    </Details>
  );
};

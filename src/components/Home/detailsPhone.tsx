import React from 'react';
import { Details } from '../../styles/listStyled/detailsStyled';
import { Link } from 'react-router-dom';

export const DetailsPhone = () => {
  return (
    <Details>
      <Link to="/">x</Link>
      <p>
        <strong>Width:</strong>
      </p>
      <p>
        <strong>Height:</strong>
      </p>
      <p>
        <strong>👍</strong>
      </p>
      <p>
        <strong>Date:</strong>
      </p>
    </Details>
  );
};

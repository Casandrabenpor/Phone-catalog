import React, { useEffect, useState } from 'react';
import { Details } from '../../styles/listStyled/detailsStyled';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../app/store';
import { getAllPhones } from '../../features/listSlice/phoneSlice';
import Phone from '../../models/interface';

export const DetailsPhone = () => {
  const location = useLocation();
  const phoneId = parseInt(location.pathname.replace('/details/', ''));

  const phonesData = useTypedSelector(getAllPhones) as Phone[];

  const phone = phonesData.find((phone) => phone.id == phoneId);

  return (
    <Details>
      <Link to="/">X</Link>
      <p>
        <img src={phone?.photoUrl} alt={phone?.name} />
      </p>
      <p>
        <strong>Name: {phone?.name}</strong>
      </p>
      <p>
        <strong>Description: {phone?.description}</strong>
      </p>
      <p>
        <strong>Price {phone?.price}</strong>
      </p>
    </Details>
  );
};

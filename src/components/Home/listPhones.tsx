import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonCard,
  Card,
  Gallery,
  TextPrice,
  Subtitle,
  TextGallery,
  TitleGallery,
  IconsCard,
} from '../../styles/listStyled/listStyled';
import {
  getPhoneStatus,
  getAllPhones,
} from '../../features/listSlice/phoneSlice';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { loadPhones } from '../../features/listSlice/phoneApiSlice';
import Phone from '../../models/interface';
import { DeletePhone } from '../Admin/deletePhone';
import { HeartButton } from '../Heart/heartButton';

interface ListPhonesProps {
  title: string;
  isAdmin: boolean; // Tipo boolean para isAdmin
}
export const ListPhones: React.FC<ListPhonesProps> = ({ title, isAdmin }) => {
  const dispatch = useTypedDispatch();
  const phoneStatus = useTypedSelector(getPhoneStatus);
  const phonesData = useTypedSelector(getAllPhones) as Phone[];

  useEffect(() => {
    // Cargamos los datos desde la API
    if (phoneStatus === 'idle') {
      dispatch(loadPhones());
    }
  }, [phoneStatus, dispatch]);

  return (
    <div>
      <Subtitle>{title}</Subtitle>
      <Gallery>
        {phonesData.map((phone: Phone) => (
          <Card key={phone.id}>
            <Link to={`/details/${phone.id}`}>
              <img src={phone.photoUrl} alt={phone.name} />
            </Link>
            <TitleGallery>{phone.name}</TitleGallery>
            <TextGallery>{phone.description}</TextGallery>
            <TextPrice>{phone.price}</TextPrice>
            <IconsCard>
              {isAdmin && <DeletePhone phoneId={phone.id} />}
              <HeartButton />
            </IconsCard>
          </Card>
        ))}
      </Gallery>
    </div>
  );
};

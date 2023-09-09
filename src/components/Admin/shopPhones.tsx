import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Gallery,
  TextPrice,
  Subtitle,
  TextGallery,
  TitleGallery,
} from '../../styles/cardsStyled/cardsStyled';
import { useTypedDispatch, useTypedSelector } from '../../app/store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getPhonesBought,
  loadItemsBought,
} from '../../features/shopSlice/shopSlice';
import Phone from '../../models/interface';

interface ListPhonesProps {
  title: string;
}
export const ShopPhones: React.FC<ListPhonesProps> = ({ title }) => {
  const dispatch = useTypedDispatch();
  const loaded = useTypedSelector((state) => state.shop.loaded);
  const phonesData = useTypedSelector(getPhonesBought) as Phone[];

  useEffect(() => {
    // Api
    if (loaded === false) {
      dispatch(loadItemsBought());
    }
  });

  return (
    <div>
      <ToastContainer theme="colored" />
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
          </Card>
        ))}
      </Gallery>
    </div>
  );
};

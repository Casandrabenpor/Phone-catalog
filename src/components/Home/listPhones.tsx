import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircleLoader } from 'react-spinners';
interface ListPhonesProps {
  title: string;
  isAdmin: boolean; // Tipo boolean para isAdmin
}
export const ListPhones: React.FC<ListPhonesProps> = ({ title, isAdmin }) => {
  const dispatch = useTypedDispatch();
  const phoneStatus = useTypedSelector(getPhoneStatus);
  const phonesData = useTypedSelector(getAllPhones) as Phone[];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Api
    if (phoneStatus === 'idle') {
      dispatch(loadPhones());
    } else if (phoneStatus === 'loading') {
      //animation loading
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [phoneStatus, dispatch]);

  return (
    <div>
      <ToastContainer theme="colored" />
      <Subtitle>{title}</Subtitle>
      {isLoading && <CircleLoader color="rgb(243, 100, 18)" size={1000} />}
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

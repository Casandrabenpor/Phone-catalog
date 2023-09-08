import React, { useEffect } from 'react';
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
            {/* <ButtonCard>Add to cart</ButtonCard> */}
            <IconsCard>
              <DeletePhone phoneId={phone.id} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027 24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333 3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconsCard>
          </Card>
        ))}
      </Gallery>
    </div>
  );
};

import styled from 'styled-components';
import { colors } from '../theme';

export const Subtitle = styled.h2`
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
`;

export const Card = styled.div`
  cursor: pointer;

  img {
    width: 50%;
    object-fit: cover;
    border: 2px solid #fffdfd;
    flex-grow: 3;
  }
`;
export const ButtonCard = styled.button`
  width: 10em;
  height: 3em;
  cursor: pointer;
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const Gallery = styled.section`
  display: grid;
  align-items: center;
  padding: 5%;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 1em;
  margin-top: 5%;
`;
export const TitleGallery = styled.h4`
  color: ${colors.black};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
export const TextGallery = styled.h4`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const RpGallery = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

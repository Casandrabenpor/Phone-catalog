import styled from 'styled-components';
import { colors } from '../theme';
interface Props {
  $sideBarActivated: boolean;
}
export const LogoNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  background-color: white;
  img {
    width: 10%;
    height: 15vh;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2em;
    list-style: none;
    font-size: 26px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: ${colors.black};
    &.active {
      color: ${colors.red};
      border-bottom: 2px solid #b88e2f;
    }
    &:hover {
      color: ${colors.red};
      border-bottom: 2px solid #b88e2f;
    }
  }
`;
// ASIDEBAR
export const Content = styled.div<Props>`
  width: ${(props) => (props.$sideBarActivated ? '85%' : '100%')};
  margin-right: ${(props) => (props.$sideBarActivated ? '15%' : '0%')};
`;
export const Aside = styled.aside`
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
  background: white;
  height: 80vh;
  width: 30%;
  border: 1px solid black;
  top: 0;
  right: 0;
  position: fixed;
  padding: 1em;
  color: ${colors.black};
  z-index: 1;
`;

export const AsideContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Shopping = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  img {
    width: 45%;
    height: 15vh;
  }
`;
export const ShoppingText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${colors.black};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p.yellow-text {
    color: ${colors.yellow};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  align-items: center;
`;
export const TextTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60%;
  align-items: center;
`;
export const Total = styled.h4`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ButtonTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
`;
export const Button = styled.button`
  padding: 6px 30px;
  border-radius: 50px;
  border: 1px solid #000;
  color: ${colors.black};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

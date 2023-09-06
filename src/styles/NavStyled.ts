import styled from 'styled-components';
import { colors } from './theme';

export const LogoNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2em;
  padding: 2em;
  img {
    width: 8%;
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
    &:hover {
      border-bottom: 2px solid #b88e2f;
    }
  }
`;

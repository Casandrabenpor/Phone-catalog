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

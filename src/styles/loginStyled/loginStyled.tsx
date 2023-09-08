import styled from 'styled-components';
import { colors } from '../theme';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.black};
  font-weight: 600;
  border: none;
  width: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 16px 30px;
  border-radius: 12px;
  justify-content: center;
  margin-left: 25%;
  margin-top: 10%;
  padding: 2em;
  img {
    width: 5em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.black};
  button {
    border-radius: 12px;
    border: none;
    width: 215px;
    height: 50px;
    background: #fff;
    margin-top: 15%;
    border: 1px solid ${colors.yellow};
    font-family: 'Poppins';
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: ${colors.yellow};
      color: ${colors.white};
    }
  }
  input {
    font-family: 'Poppins';
    border-radius: 12px;
    border: none;
    width: 220px;
    height: 50px;
    margin: 1em;
    background-color: rgb(248, 248, 248);
    color: ${colors.black};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 16px 30px;
  }
`;

import styled from 'styled-components';
import { colors } from '../theme';
export const Container = styled.div`
  box-shadow: 0px 16px 30px #ffffff13;
  border-radius: 12px;
  width: 70%;
  margin-left: 15%;
  padding: 2em;
`;
export const FormTitle = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  label {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  input {
    border-bottom: 1px solid ${colors.grey};
    border-left: none;
    border-top: none;
    border-right: none;
    text-align: center;
    width: 50%;
    margin-left: 25%;
  }
`;

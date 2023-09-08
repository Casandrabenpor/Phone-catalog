import React from 'react';
import { ContainerLogin, Form } from '../../styles/loginStyled/loginStyled';
import logo from '../../assets/logophone.jpg';
export const Login = () => {
  return (
    <ContainerLogin>
      <img src={logo} alt="logo" />
      <p>Phone Catalog</p>

      <Form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="casandra" id="name" name="name" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <button type="submit" value="Login">
          Login
        </button>
      </Form>
    </ContainerLogin>
  );
};

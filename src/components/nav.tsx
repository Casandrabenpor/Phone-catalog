import React from 'react';
import Logo from '../assets/logophone.png';
import { LogoNav } from '../styles/NavStyled';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <LogoNav>
        <img src={Logo} alt="Logo" />
        <h2>Phone Catalog</h2>
        <ul>
          <li key="home">
            <Link to="/">🏠 HOME</Link>
          </li>
          <li key="admin">
            <Link to="/admin">👨‍💻ADMIN</Link>
          </li>
        </ul>
      </LogoNav>
    </>
  );
};

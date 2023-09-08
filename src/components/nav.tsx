import React, { useState } from 'react';
import Logo from '../assets/logophone.jpg';
import { LogoNav } from '../styles/NavStyled';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  // Función para cambiar el elemento activo
  const handleSetActiveLink = (link: any) => {
    setActiveLink(link);
  };
  return (
    <>
      <LogoNav>
        <img src={Logo} alt="Logo" />
        <h2>Phone Catalog</h2>
        <ul>
          <li key="home">
            <Link
              to="/"
              onClick={() => handleSetActiveLink('home')}
              className={activeLink === 'home' ? 'active' : ''}
            >
              🏠 HOME
            </Link>
          </li>
          <li key="admin">
            <Link
              to="/admin"
              onClick={() => handleSetActiveLink('admin')}
              className={activeLink === 'admin' ? 'active' : ''}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
          <li key="create">
            <Link to="/create">✏ Create</Link>
          </li>
        </ul>
      </LogoNav>
    </>
  );
};

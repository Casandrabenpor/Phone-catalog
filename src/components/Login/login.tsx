import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerLogin, Form } from '../../styles/loginStyled/loginStyled';
import logo from '../../assets/logophone.jpg';
import { useTypedDispatch } from '../../app/store';

import { login } from '../../features/listSlice/loginSlice/loginSlice';

export const Login = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Verifica las credenciales (nombre de usuario y contraseña)
    if (name === 'casandra' && password === '123456') {
      dispatch(
        login({
          name: name,
          loggedIn: true,
        }),
      );
      navigate('/admin/phones');
    } else {
      setError('Credenciales incorrectas');
    }
  };
  return (
    <ContainerLogin>
      <img src={logo} alt="logo" />
      <p>Phone Catalog</p>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="casandra"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
    </ContainerLogin>
  );
};

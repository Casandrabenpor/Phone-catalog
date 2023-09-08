import { useSelector } from 'react-redux';
import React from 'react';
import { selectUser } from './features/listSlice/loginSlice/loginSlice';
import { Login } from './components/Login/login';
import { ListPhones } from './components/Home/listPhones';

export const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <ListPhones title="👩‍💻ADMIN" isAdmin={true} /> : <Login />}
    </div>
  );
};

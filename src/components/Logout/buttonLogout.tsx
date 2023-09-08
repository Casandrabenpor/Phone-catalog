import React from 'react';
import { useTypedDispatch } from '../../app/store';
import { logout } from '../../features/listSlice/loginSlice/loginSlice';
import { useNavigate } from 'react-router-dom';

export const ButtonLogout = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };
  return (
    <div>
      <button onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  );
};

import React from 'react';
import Logo from '../assets/logophone.png';

export const Nav = () => {
  return (
    <>
      <div>
        <div>
          <img src={Logo} alt="Logo" width={100} height={100} />
        </div>
        <div>
          <p>travl</p>
        </div>
      </div>
    </>
  );
};

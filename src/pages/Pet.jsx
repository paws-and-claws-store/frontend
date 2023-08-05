import React from 'react';
import { Outlet } from 'react-router-dom';

export const Pet = () => {
  return (
    <div>
      Pet
      <Outlet />
    </div>
  );
};

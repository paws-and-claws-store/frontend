import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const Pet = () => {
  const data = useParams();
  console.log('data:', data);
  return (
    <div>
      Pet
      <Outlet />
    </div>
  );
};

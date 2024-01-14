import React from 'react';
import { RegistrationContainer } from './Registration.styled';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const Registration = () => {  
  return (
    <RegistrationContainer>
      <AuthForm />
    </RegistrationContainer>
  );
};

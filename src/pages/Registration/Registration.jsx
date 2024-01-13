import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RegistrationContainer } from './Registration.styled';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const Registration = () => {

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleRegistration = () =>{
      if (isLoggedIn) {
        navigate('/');
      }
    }

   window.addEventListener('focus', handleRegistration);

   return ()=>{
    window.removeEventListener('focus', handleRegistration);
   }
  },);

  return (
    <RegistrationContainer>
      <AuthForm />
    </RegistrationContainer>
  );
};

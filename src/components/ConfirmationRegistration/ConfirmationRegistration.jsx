import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResendVerifyEmail } from 'components/ResendVerifyEmail/ResendVerifyEmail';
import { useAuth } from 'hooks/useAuth';
import {
  ConfirmationRegistrationContainer,
  Titel,
  Message,
  Button,
} from './ConfirmationRegistration.styled';

export const ConfirmationRegistration = () => {
  const [showResendEmail, setShowResendEmail] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <ConfirmationRegistrationContainer>
        <Titel>Підтвердження реєстрації</Titel>
        <Message>
          Дякуємо за реєстрацію! Щоб завершити процес, будь ласка, перевірте
          свою електронну пошту та перейдіть за посиланням у листі, що ми вам
          надіслали.
        </Message>
        <Button onClick={() => setShowResendEmail(true)}>
          Лист не надійшов
        </Button>
      </ConfirmationRegistrationContainer>
      {showResendEmail ? <ResendVerifyEmail /> : null}
    </>
  );
};

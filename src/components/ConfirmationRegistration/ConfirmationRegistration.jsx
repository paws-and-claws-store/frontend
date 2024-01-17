import React, { useEffect, useState } from 'react';
import { ResendVerify } from 'components/ResendVerify/ResendVerify';
import {
  ConfirmationRegistrationContainer,
  Titel,
  Message,
  Button,
} from './ConfirmationRegistration.styled';
import { useNavigate } from 'react-router';

export const ConfirmationRegistration = () => {
  const [showResendEmail, setShowResendEmail] = useState(false);
  const navigation = useNavigate();
  const persistedString = localStorage.getItem('persist:auth');
  const isUser = JSON.parse(persistedString);
  console.log('isUser:', isUser.isLoggedIn);

  useEffect(() => {
    const handleChange = () => {
      const dataAuth = localStorage.getItem('persist:auth');
      const keyAuth = JSON.parse(dataAuth);

      if (keyAuth?.isLoggedIn === 'true') {
        navigation('/');
      }
    };
    window.addEventListener('storage', handleChange);

    return () => {
      window.removeEventListener('storage', handleChange);
    };
  }, [navigation]);

  return !showResendEmail ? (
    <ConfirmationRegistrationContainer>
      <Titel>Підтвердження реєстрації</Titel>
      <Message>
        Дякуємо за реєстрацію! Щоб завершити процес, будь ласка, перевірте свою
        електронну пошту та перейдіть за посиланням у листі, що ми вам
        надіслали.
      </Message>
      <Button onClick={() => setShowResendEmail(true)}>Лист не надійшов</Button>
    </ConfirmationRegistrationContainer>
  ) : (
    <ResendVerify setShowResendEmail={setShowResendEmail} />
  );
};

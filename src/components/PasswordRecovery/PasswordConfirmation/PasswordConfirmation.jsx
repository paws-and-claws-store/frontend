import React, { useState } from 'react';
import { ResendVerify } from 'components/ResendVerify/ResendVerify';
import {
  PasswordConfirmationContainer,
    Titel,
  Message,
  Button,
} from './PasswordConfirmation.styled';

export const PasswordConfirmation = () => {
  const [recoveryPass] = useState(true)
  const [showResendEmail, setShowResendEmail] = useState(false);
  

  return (
    !showResendEmail 
     ? <PasswordConfirmationContainer>
        <Titel>Відновлення пароля</Titel>
        <Message>
          На ваш email надіслано листа з даними для відновлення пароля. Будь
          ласка, перевірте свою пошту для отримання подальших інструкцій.
        </Message>
        <Button onClick={() => setShowResendEmail(true)}>
          Лист не надійшов
        </Button>
      </PasswordConfirmationContainer>
     
       :<ResendVerify setShowResendEmail={setShowResendEmail} recoveryPass={recoveryPass}/>    
  );
};

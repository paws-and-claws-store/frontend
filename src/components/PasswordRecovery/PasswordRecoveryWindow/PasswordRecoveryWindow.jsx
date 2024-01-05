import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'redux/api/auth-operations';

import {
  PasswordRecoveryContainer,
  Titel,
  ResendForm,
  ResendInput,
  Button,
  CloseButton,
} from './PasswordRecoveryWindow.styled';
import { PasswordConfirmation } from 'components/PasswordRecovery/PasswordConfirmation/PasswordConfirmation';

export const PasswordRecovery = ({ setShowWindouwRecoveryPass }) => {
  const [email, setEmail] = useState('');
  
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const dispatch = useDispatch();

  const onChangeEmail = e => setEmail(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(email));
    setEmail('');
    setShowPasswordConfirmation(true)
  };
  return (
    <PasswordRecoveryContainer>
      <CloseButton onClick={() => setShowWindouwRecoveryPass(false)}>
        Закрити
      </CloseButton>
      {!showPasswordConfirmation ? (
        <>
          <Titel>Відновлення пароля</Titel>
          <ResendForm onSubmit={handleSubmit}>
            <ResendInput
              name="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Електронна пошта "
              autoComplete="on"
            />
            <Button
              type="submit"
              disabled={email === ''}
              // onClick={() => {setShowPasswordConfirmation(true)}}
            >
              Відновити пароль
            </Button>
          </ResendForm>
        </>
      ) : (
        <PasswordConfirmation />
      )}
    </PasswordRecoveryContainer>
  );
};

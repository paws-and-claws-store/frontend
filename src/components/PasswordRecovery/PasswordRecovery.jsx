import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { resendVerifyEmail } from 'redux/api/auth-operations';
import {
  PasswordRecoveryContainer,
  Titel,
  ResendForm,
  ResendInput,
  Button,
  CloseButton,
} from './PasswordRecovery.styled';
import { PasswordConfirmation } from 'components/PasswordConfirmation/PasswordConfirmation';

export const PasswordRecovery = ({ setShowWindouwRecoveryPass }) => {
  const [email, setEmail] = useState('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  // const dispatch = useDispatch();

  const onChangeEmail = e => setEmail(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(resendVerifyEmail(email));
  };
  return (
    <PasswordRecoveryContainer>
      <CloseButton onClick={() => setShowWindouwRecoveryPass(false)}>
        Закрити
      </CloseButton>
      {!showPasswordConfirmation ? (
        <>
          {' '}
          <Titel>Відновлення пароля</Titel>
          <ResendForm style={{ display: 'block' }} onSubmit={handleSubmit}>
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
              onClick={() => setShowPasswordConfirmation(true)}
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

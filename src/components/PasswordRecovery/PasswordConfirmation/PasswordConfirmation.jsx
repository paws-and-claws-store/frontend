import React, { useState } from 'react';
// import { ResendVerifyEmail } from 'components/ResendVerifyEmail/ResendVerifyEmail';
import {
  PasswordConfirmationContainer,
    Titel,
  Message,
  Button,
  ResendVerifyEmailContainer,
  TitelResend,
  ResendForm,
  ResendInput,
  ButtonResend,
} from './PasswordConfirmation.styled';

export const PasswordConfirmation = () => {
  const [showResendEmail, setShowResendEmail] = useState(false);
  const [email, setEmail] = useState('');

  const onChangeEmail = (e)=> setEmail(e.currentTarget.value);

  const handleSubmit = (e) => {
  e.preventDefault();
//   dispatch(resendVerifyEmail(email))
  };



  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate('/');
  //     }
  //   }, [navigate, isLoggedIn]);

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
     

     : <ResendVerifyEmailContainer>
      <TitelResend>Лист не надійшов</TitelResend>
      <Message>
        Введіть адресу електронної пошти, яку ви вказали при реєстрації:
      </Message>

      <ResendForm style={{display: 'block'}} onSubmit={handleSubmit}>
        <ResendInput
        name="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="Електронна пошта "
        autoComplete="on"
        />
      <ButtonResend type='submit' disabled={email===''} onClick={() => setShowResendEmail(false)}>Надіслати ще раз</ButtonResend>
      </ResendForm>

      
    </ResendVerifyEmailContainer>
    
  );
};

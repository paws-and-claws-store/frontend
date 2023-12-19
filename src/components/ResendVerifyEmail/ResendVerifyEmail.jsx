import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resendVerifyEmail } from 'redux/api/auth-operations';
import { ResendVerifyEmailContainer, Titel, Message, ResendForm, ResendInput, Button } from './ResendVerifyEmail.styled';

export const ResendVerifyEmail = () => {
    const [email, setEmail] = useState('')
    
    const dispatch = useDispatch();

    const onChangeEmail = (e)=> setEmail(e.currentTarget.value)

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resendVerifyEmail(email))
    }
  return (
    <ResendVerifyEmailContainer>
      <Titel>Лист не надійшов</Titel>
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
      <Button type='submit'>Надіслати ще раз</Button>
      </ResendForm>

      
    </ResendVerifyEmailContainer>
  );
};

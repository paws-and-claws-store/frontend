import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RegistrationContainer } from './Registration.styled';
import { AuthForm } from 'components/AuthForm/AuthForm';



export const Registration = () => {
  


  return (<RegistrationContainer><AuthForm/></RegistrationContainer>);
};
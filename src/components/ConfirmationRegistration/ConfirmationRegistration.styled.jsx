import styled from '@emotion/styled';
// import { ErrorMessage, Field } from 'formik';
// import { theme } from 'styles';

export const ConfirmationRegistrationContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 450px;
height: 100%;
padding: 10px;
background-color: #ffffff;
margin-bottom: 50px;
`;

export const Titel = styled.h2`
font-size: 40px;
margin-bottom: 20px;
`;

export const Message = styled.p`
font-size: 20px;
margin-bottom: 20px;
`;

export const Button = styled.button`
position: relative;
font-size: 20px;
color: #00a27f;
&::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #00a27f;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  };
  &:hover::after {
    transform: scaleX(1)
  };
`;
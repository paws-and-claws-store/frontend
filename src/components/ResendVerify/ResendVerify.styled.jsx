import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { theme } from 'styles';


export const ResendVerifyEmailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 360px;
height: 100%;
padding: 10px;
background-color: #ffffff;
margin: 0 auto;
`;

export const Titel = styled.h2`
font-size: 35px;
margin-bottom:10px;
`;

export const Message = styled.p`
font-size: 20px;
margin-bottom: 20px;
`;

export const FormField = styled.div`
  position: relative;
`;

export const InputEmailWraper = styled.div`
  margin-bottom: 14px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.blue};
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const InputForm = styled(Field)`
  padding: 12px 50px 12px 15px;
  width: 100%;
  height: 46px;
  font-size: ${theme.fontSizes.m};
  border: none;
  border-radius: 10px;
  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.m};
  }
  @media screen and (min-width: 1280px) {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.64px;
  }
`;

export const ErrorMess = styled(ErrorMessage)`
  position: absolute;
  color: ${theme.colors.brightRed};
  
  @media (max-width: 767px) {
    font-size: 10px;
    top: 47px;
    left: 10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
    top: 52px;
    left: 15px;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  font-size: 10px;
  color: ${theme.colors.brightGreen};
  left: 10px;
  top: 47px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const IconWraper = styled.div`
  display: flex;
  position: absolute;
  justify-content: end;
  width: 54px;
  top: 12px;
  left: 187px;
  @media (min-width: 768px) {
    width: 60px;
    top: 10px;
    left: 270px;
  }
`;

export const IconCheck = styled.span`
  margin-right: auto;
  svg {
    path{
    fill: ${theme.colors.brightGreen};
  }
  }
  @media (min-width: 768px) {
    /* top: 12px; */
    /* left: 420px; */
  }
`;

export const IconCross = styled.span`
  svg {
    fill: ${theme.colors.brightRed};
    &:hover {
     cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: ${theme.fontSizes.l};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.8px;
  color: ${theme.colors.black};
  border-radius: 10px;
  background-color: ${theme.colors.secGreen};
  transition: all 250ms;

  &:hover {
    background-color: rgb(133, 135, 136);
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { ErrorMessage, Field } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { theme } from 'styles';

export const LogFormContainer = styled.div`
  margin: 0 auto;
  padding: 40px 12px;
  text-align: center;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  width: 280px;
  height: 425px;
  box-shadow: 7px 10px 14px rgba(63, 143, 248, 0.11);
    z-index: ${theme.zIndexes.loginMenu};
  @media (min-width: 768px) {
    padding: 50px 65px;
    width: 458px;
    height: 481px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1280px) {
    height: 481px;
  }
`;

export const Titel = styled.h1`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xxl};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
    margin-bottom: 20px;
  }
  @media (min-width: 1280px) {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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

export const InputPasswordWraper = styled.div`
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
    left: 256px;
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
    top: 12px;
    left: 420px;
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

export const OnIcon = styled(VisibilityIcon)`
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.secGreen};
     cursor: pointer;
    }

  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const OffIcon = styled(VisibilityOffIcon)`
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.secGreen};
     cursor: pointer;
    }

  @media (min-width: 768px) {
    top: 12px;
    left: 420px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 96px;
  margin-bottom: 8px;
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
    margin-top: 28px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ToRegister = styled.span`
display: flex;
gap:50px;
justify-content: center;
align-items: center;
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.xs};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const PassRecoveryBtn = styled.button`
position: relative;
font-size: '20px'; 
color: 'black';
&::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${theme.colors.black};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  };
  &:hover::after {
    transform: scaleX(1)
  };
`;


export const LinkStyled = styled(NavLink)`
position: relative;
  color: ${theme.colors.black};
  font-size: 20px;
  margin-left: 3px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${theme.colors.black};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  };
  &:hover::after {
    transform: scaleX(1)
  };
`;
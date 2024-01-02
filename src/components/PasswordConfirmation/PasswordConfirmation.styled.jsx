import styled from '@emotion/styled';
// import { ErrorMessage, Field } from 'formik';
// import { theme } from 'styles';

export const PasswordConfirmationContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 20px;
background-color: #ffffff;
margin-bottom: 50px;
justify-content: center;
align-items: center;
text-align: center;
`;

export const Titel = styled.h2`
margin-top: 60px;
margin-bottom: 20px;
`;

export const Message = styled.p`
margin-bottom: 20px;
`;

export const Button = styled.button`
color: #00a27f;
`;

export const ResendVerifyEmailContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
/* height: 220px; */
padding: 20px;
background-color: #ffffff;
justify-content: center;
align-items: center;
text-align: center;
`;

export const TitelResend = styled.h2`
margin-top: 60px;
margin-bottom:10px;
`;

export const MessageResend = styled.p`
margin-bottom: 20px;
`;

export const ResendForm = styled.form`
display: block;
width: 300px;
height: 60px;
margin-left: auto;
margin-right: auto;
`;

export const ResendInput = styled.input`
width: 100%;
height: 50px;
padding: 12px 15px;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 25px;
`;

export const ButtonResend = styled.button`
width: 200px;
height: 50px;
font-size: 20px;
font-weight: 600;
border-radius: 10px;
background-color: ${ (props) => props.disabled ? '#c1c1c1' :' #d8be68'};
transition: all 200ms;
&:hover {
    background-color: ${ (props) => props.disabled ? '#c1c1c1' :'rgb(175, 136, 59)'};
  };
`;
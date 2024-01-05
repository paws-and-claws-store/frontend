import styled from '@emotion/styled';
// import { ErrorMessage, Field } from 'formik';
// import { theme } from 'styles';


export const ResendVerifyEmailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 450px;
height: 100%;
padding: 10px;
background-color: #ffffff;
`;

export const Titel = styled.h2`
font-size: 40px;
margin-bottom:10px;
`;

export const Message = styled.p`
font-size: 20px;
margin-bottom: 20px;
`;

export const ResendForm = styled.form`
display: block;
width: 300px;
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

export const Button = styled.button`
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
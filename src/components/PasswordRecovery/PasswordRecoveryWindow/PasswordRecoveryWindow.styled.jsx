import styled from '@emotion/styled';
// import { ErrorMessage, Field } from 'formik';
// import { theme } from 'styles';

export const PasswordRecoveryContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
width: 100%;
/* height: 320px; */
padding: 30px;
background-color: #ffffff;
justify-content: center;
align-items: center;
text-align: center;
`;

export const Titel = styled.h2`
margin-top: 70px;
margin-bottom:50px;
`;

// export const Message = styled.p`
// margin-bottom: 20px;
// `;

export const ResendForm = styled.form`
display: block;
width: 390px;
margin-left: auto;
margin-right: auto;
`;

export const ResendInput = styled.input`
width: 328px;
height: 50px;
padding: 12px 15px;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 25px;
`;

export const Button = styled.button`
width: 328px;
height: 50px;
font-size: 20px;
font-weight: 600;
border-radius: 10px;
background-color: ${ (props) => props.disabled ? '#c1c1c1' :' #d8be68'};
transition: all 200ms;
&:hover {
    background-color: ${ (props) => props.disabled ? '#c1c1c1' :'rgb(175, 136, 59)'};
  };
&:active {
    width: 198px;
    height: 48px;
}
`;


export const CloseButton = styled.button`
width: 100px;
height: 30px;
margin-left: auto;
border-radius: 4px;
background-color: #ffffff;
`;
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import { theme } from 'styles';

export const UserNavContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 458px;
height: 481px;
border-radius: 10px;
`;

export const UserPageLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 328px;
height: 70px;
border-radius: 5px;
background-color: #dfdfdf;
margin-bottom: 100px;
`;

export const LogOutBtn = styled.button`
width: 328px;
height: 70px;
border-radius: 10px;
background-color: #dfdfdf;

`;
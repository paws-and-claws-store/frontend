import styled from '@emotion/styled';
import { theme } from 'styles';
// import { NavLink } from 'react-router-dom';

export const DetailsListContainer = styled.div`
  
`;

export const InfoButtonList = styled.div`
  display: flex;
  gap: 48px;
`;

export const CustomNavLink = styled.button`
  color: ${({isActiveDescription,isActiveComposition,isActiveComments}) =>isActiveDescription||isActiveComposition||isActiveComments ? `${theme.colors.black}` : `${theme.colors.green}`};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  cursor: pointer;
  
  &:focus,
  &:hover {
    color: ${theme.colors.black};
  }
`;



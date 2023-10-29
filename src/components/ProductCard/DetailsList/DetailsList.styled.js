import styled from '@emotion/styled';
import { theme } from 'styles';
// import { NavLink } from 'react-router-dom';

export const DetailsListContainer = styled.div`
  
`;

export const InfoLinkList = styled.div`
  display: flex;
  gap: 48px;
`;

export const CustomNavLink = styled.button`
  color: ${({isActive}) =>isActive? `${theme.colors.black}` : `${theme.colors.green}`};
  cursor: pointer;
  &.active,
  &:focus,
  &:hover {
    color: ${theme.colors.black};
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
`;

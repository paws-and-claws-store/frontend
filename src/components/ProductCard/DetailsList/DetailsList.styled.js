import styled from '@emotion/styled';
import { theme } from 'styles';
import { NavLink } from 'react-router-dom';

export const InfoLinkList = styled.ul`
  display: flex;
  gap: 48px;
`;

export const CustomNavLink = styled(NavLink)`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};

  &:active,
  &:focus,
  &:hover {
    color: ${theme.colors.black};
  }
`;

import styled from '@emotion/styled';
import { theme } from 'styles';
import { NavLink } from 'react-router-dom';

export const ProductContainer = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .prodName {
    padding-bottom: 16px;
    border-bottom: 1px solid ${theme.colors.secGreen};
  }
`;

export const ImageContainer = styled.div`
  /* height: 628px; */
`;

export const CardContainer = styled.div`
  width: 520px;
`;

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

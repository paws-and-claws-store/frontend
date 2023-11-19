import styled from '@emotion/styled';
import { theme } from 'styles';
import { Link } from 'react-router-dom';

export const ProductContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  max-width: 736px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const CardContainer = styled.div`
  width: 520px;
`;

export const InfoLinkList = styled.ul`
  display: flex;
  gap: 48px;
`;

export const CustomNavLink = styled(Link)`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};

  &:active,
  &:focus,
  &:hover {
    color: ${theme.colors.black};
  }

  .active {
    color: ${theme.colors.black};
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 250px;
`;

export const TitleCart = styled.h2`
  margin-top: 48px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const BtnBackToCatalog = styled(Link)`
  display: flex;
  margin-top: 180px;
  color: ${theme.colors.green};

  width: 304px;
  padding: 16px 10px;

  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border: 1px solid ${theme.colors.green};

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover,
  &:focus {
    color: ${theme.colors.secGreen};
    border-color: ${theme.colors.secGreen};
  }

  &:active {
    color: ${theme.colors.orange};
    border-color: ${theme.colors.orange};
  }
`;

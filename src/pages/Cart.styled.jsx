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

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
`;

export const TotalAmountContainer = styled.div`
  width: 522px;
  border-top: 1px solid ${theme.colors.secGreen};
  margin-left: auto;
  margin-bottom: 355px;
`;

export const TotalAmount = styled.p`
  display: flex;
  align-items: center;
  gap: 35px;

  margin-top: 41px;
  color: ${theme.colors.green};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;

  & span {
    color: ${theme.colors.orange};
  }
`;

export const TotalAmountNumber = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TotalAmountSumbol = styled.span`
  margin-left: 4px;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 142.857% */
  text-transform: uppercase;
`;

export const LinkToCatalog = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  width: 148px;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: ${theme.colors.orange};
  & svg {
    fill: ${theme.colors.orange};
  }

  &:hover,
  &:focus,
  &:hover svg,
  &:focus svg {
    color: ${theme.colors.green};
    fill: ${theme.colors.green};
  }
  &:active,
  &:active svg {
    color: ${theme.colors.secGreen};
    fill: ${theme.colors.secGreen};
  }
`;

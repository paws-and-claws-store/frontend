import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const EmptyCartContainer = styled.div`
  margin-top: 48px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 250px;
`;

export const TitleCart = styled.h2`
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

export const CartContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 230px;
`;

export const ListContainer = styled.div`
  /* outline: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  gap: 20px;

  margin-top: 48px;
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;

  row-gap: 48px;
`;

export const TotalAmountContainer = styled.div`
  width: 520px;
  height: 148px;
  padding: 20px;
  border: 1px solid ${theme.colors.secGreen};
`;

export const Line = styled.span`
  margin-top: 6px;
  display: block;
  width: 100%;
  border-top: 1px solid ${theme.colors.secGreen};
  color: ${theme.colors.orange};
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 20px;

  & p {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  }
`;

export const TotalAmountTitle = styled.h3`
  color: ${theme.colors.green};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const TotalAmountNumber = styled.span`
  color: ${theme.colors.orange};

  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TotalAmountSumbol = styled.span`
  color: ${theme.colors.orange};

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

export const Order = styled.button`
  width: 324px;
  height: 56px;
  padding: 16px 10px;
  border-radius: 40px;
  border: 1px solid ${theme.colors.orange};

  color: ${theme.colors.orange};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover,
  &:focus {
    color: ${theme.colors.green};
    border-color: ${theme.colors.green};
  }
  &:active {
    color: ${theme.colors.secGreen};
    border-color: ${theme.colors.secGreen};
  }
`;

import styled from '@emotion/styled';
import { theme } from 'styles';

import { ReactComponent as Heart } from '../../../svg/HeartStraight.svg';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  width: 520px;
  height: 628px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 12px;
`;

export const BrandTitle = styled(Link)`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};

  color: ${theme.colors.orange};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${theme.colors.green};
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  font-size: 40px;
  font-weight: ${theme.fontWeight.SemiBold};
  line-height: 48px;

  color: ${theme.colors.black};

  margin-bottom: 12px;
`;

export const ShortDescription = styled.h4`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};

  color: ${theme.colors.black};

  margin-bottom: 5px;
`;

export const CardCodeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 12px;
`;

export const CarCodeWrapper = styled.div`
  display: flex;

  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.colors.secGreen};
`;

export const CardCodeListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;

  font-size: 14px;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s};

  color: ${theme.colors.black};
  background-color: #d8d4b8;
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & span:nth-of-type(n + 2) {
    margin-left: 4px;
  }
`;

export const InavAilability = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.s};

  color: ${theme.colors.green};
`;

export const AilabilityWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  /* margin-bottom: auto; */
  align-items: center;
`;

export const InStockText = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};

  color: ${theme.colors.grey};
`;

export const HeartIcon = styled(Heart)`
  &:hover,
  &:focus {
    fill: ${theme.colors.orange};
  }
`;

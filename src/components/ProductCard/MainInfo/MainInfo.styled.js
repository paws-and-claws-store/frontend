import styled from '@emotion/styled';
import { theme } from 'styles';

import { ReactComponent as Heart } from '../../../svg/HeartStraight.svg';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const CardContainer = styled.div`
  width: 520px;
  height: 628px;
`;

export const BrandTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};

  color: ${theme.colors.orange};
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

  margin-bottom: 12px;
`;

export const CardCodeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CarCodeWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const CardCodeListItem = styled.li`
  padding: 4px 12px;
  border-radius: 20px;

  font-size: 14px;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s};

  color: ${theme.colors.black};
  background-color: #d8d4b8;
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
  margin-bottom: 220px;
  align-items: center;
`;

export const InStockText = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};

  color: ${theme.colors.grey};
`;

export const HeartIcon = styled(Heart)`
  &hover,
&focus: {
    fill: ${theme.colors.orange};
  }
`;

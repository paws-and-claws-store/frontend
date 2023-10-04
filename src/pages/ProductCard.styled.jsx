import styled from '@emotion/styled';
import { theme } from 'styles';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Heart } from '../svg/HeartStraight.svg';

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
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const ImageContainer = styled.div`
  /* height: 628px; */
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
`;

export const RadioBtnList = styled.ul`
  display: flex;
  gap: 10px;

  margin-top: 12px;
`;

export const RadioLabel = styled.label`
  padding: 4px 24px;

  border: 1px solid ${theme.colors.green};
  border-radius: 20px;
`;

export const RadioInput = styled.input`
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  .checked: {
    background-color: green;
  }
`;

export const RadioText = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Regular};
  line-height: ${theme.lineHeight.l};

  color: ${theme.colors.black};
`;

export const QuntityContainer = styled.div`
  margin-top: 20px;
`;

export const QuintityInputWrapper = styled.div`
  position: relative;
  width: 156px;

  margin-top: 12px;
`;

export const QuintityInput = styled.input`
  width: 156px;
  padding: 10px 32px;
  border: 1px solid ${theme.colors.green};
  border-radius: 40px;
  background-color: ${theme.colors.mainBackground};

  text-align: center;

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
`;

export const BtnDecrement = styled.button`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translate(-50%, -50%);

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
`;

export const BtnIncrement = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`;

export const CountSum = styled.p`
  font-size: 40px;
  font-weight: ${theme.fontWeight.SemiBold};
  line-height: 48px;
  color: ${theme.colors.orange};
`;

export const SubmitButton = styled.button`
  padding: 16px 58px;
  background-color: ${theme.colors.orange};
  border-radius: 40px;

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xl};
  color: ${theme.colors.white};
`;

export const HeartIcon = styled(Heart)`
  &hover,
&focus: {
    fill: ${theme.colors.orange};
  }
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

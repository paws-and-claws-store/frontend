import styled from '@emotion/styled';
import { theme } from 'styles';

export const QuntityContainer = styled.div`
  margin-top: 20px;
`;

export const QuintityInputWrapper = styled.div`
  position: relative;
  width: 156px;

  margin-top: 12px;
`;

export const ChangeQuntityLabel = styled.label`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};
  color: ${theme.colors.black};
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

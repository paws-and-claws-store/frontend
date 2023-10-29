import styled from '@emotion/styled';
import { theme } from 'styles';

export const ProdTitle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const ShortDesc = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TotalQuantity = styled.p`
  color: ${theme.colors.orange};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const QuntityContainer = styled.div`
  /* margin-top: 20px; */
`;

export const QuintityInputWrapper = styled.div`
  position: relative;
  width: 156px;

  /* margin-top: 12px; */
`;

export const QuintityInput = styled.input`
  box-sizing: border-box;
  width: 156px;
  padding: 5px 22px;
  border: 1px solid ${theme.colors.green};

  transition: border-color 0.3s;
  border-radius: 40px;
  background-color: ${theme.colors.mainBackground};

  text-align: center;
  outline: none;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
  &:focus {
    border-color: ${theme.colors.orange};
    color: ${theme.colors.orange};
  }
`;

export const BtnIncrement = styled.button`
  position: absolute;
  top: 50%;
  right: 23px;
  transform: translateY(-50%);

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin-top: 20px;
`;

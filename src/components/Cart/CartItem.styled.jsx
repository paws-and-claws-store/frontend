import styled from '@emotion/styled';
import { theme } from 'styles';

export const ImgWrapper = styled.div`
  /* filter: grayscale(0.7); */
  border: 1px solid ${theme.colors.green};
  width: 196px;
`;

export const ProdTitle = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Brand = styled.p`
  color: ${theme.colors.orange};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  text-transform: uppercase;
`;

export const ShortDesc = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Size = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const TotalQuantity = styled.p`
  display: flex;
  align-items: end;
  gap: 4px;
  color: ${theme.colors.orange};

  margin-top: auto;

  & span:first-of-type {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  & span {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
    text-transform: uppercase;
  }
`;

export const QuntityContainer = styled.div`
  /* margin-top: 20px; */
`;

export const QuintityInputWrapper = styled.div`
  position: relative;
  /* width: 120px; */
  /* height: 36px; */

  /* margin-top: 12px; */
`;

export const QuintityInput = styled.input`
  box-sizing: border-box;
  width: 120px;
  height: 36px;
  padding: 0px 10px;
  border: 1px solid ${theme.colors.green};

  transition: border-color 0.3s;
  border-radius: 40px;
  background-color: ${theme.colors.mainBackground};

  text-align: center;
  outline: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${theme.colors.green};
  &:focus {
    border-color: ${theme.colors.orange};
    color: ${theme.colors.orange};
  }
`;

export const BtnIncrement = styled.button`
  position: absolute;

  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.orange};
  }

  &:disabled {
    color: ${theme.colors.secGreen};
    cursor: default;
  }
`;

export const BtnDecrement = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translatey(-50%);

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
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

export const PriceBox = styled.div`
  height: 36px;
  /* outline: 1px solid black; */
  display: grid;
  /* flex-wrap: wrap; */
  align-items: center;
  margin-bottom: 4px;
  /* width: 94px; */

  & span.line-through-text {
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Medium};
    line-height: 1;

    text-decoration-line: line-through;
    text-transform: uppercase;
    color: ${theme.colors.grey};
  }
`;

export const PriceSt = styled.div`
  display: flex;
  align-items: baseline;
  color: ${props => props.theme.colors.orange};
  /* text-transform: uppercase; */
  /* font-family: 'rawline', sans-serif; */
  font-weight: ${theme.fontWeight.SemiBold};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.l};
  gap: 2px;
`;

export const SymbolCurrency = styled.span`
  /* margin-left: ${theme.spacing.step}px; */
  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.m};
  .line-through-text & {
    font-size: 12px;
    color: ${theme.colors.grey};
  }
`;

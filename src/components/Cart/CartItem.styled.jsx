import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const ImgWrapper = styled.div`
  position: relative;
  /* filter: opacity(${props => (props.count ? 1 : 0.3)}); */
  /* filter: grayscale(0.7); */
  border: 1px solid
    ${props =>
      props.count ? ` ${theme.colors.green}` : `${theme.colors.secBlack}`};
  width: 196px;
  transition: all 0.3s;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props =>
      props.count === 0 ? theme.colors.filterImg : 'transparent'};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const Availability = styled.div`
  width: 100%;
  height: 36px;
  border-top: 1px solid ${theme.colors.green};
  background-color: ${theme.colors.secGreen};
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  color: black;

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px; /* 114.286% */
  }
`;

export const ProdTitle = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Brand = styled(Link)`
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  color: ${theme.colors.orange};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  &:active {
    color: ${theme.colors.green};
    text-decoration: none;
  }
`;

export const ShortDesc = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  /* margin-top: ${theme.spacing.step}px; */

  /* text-decoration: underline; */
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
  align-items: baseline;
  justify-content: end;

  gap: 4px;
  color: ${theme.colors.orange};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  margin-top: auto;

  & span {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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

export const MessageContainer = styled.div`
  /* outline: 1px solid black; */
  margin-top: auto;
  width: ${props => (props.count > 0 ? 259 : 240)}px;
  height: 40px;
  display: flex;
  gap: 5px;
`;

export const MessageText = styled.span`
  color: ${theme.colors.secBlack};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
